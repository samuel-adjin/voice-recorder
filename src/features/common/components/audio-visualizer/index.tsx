"use client";
import { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record";
import RecorderButton from "@/features/common/components/recorder-button";
import { Pause, Play, Square } from "lucide-react";
import Transcript from "@/features/record/components/transcript";
import RecordList from "@/features/record/components/list";
import { handlePause, handleRecord, handleStop } from "@/lib/data/record";
import { initWaveSurfer } from "@/lib/data/wavesurfer";
import { useAudio } from "@/lib/hooks/useAudio";

export type Recording = {
  url: string;
  blob: Blob;
  filename: string;
};

export default function AudioVisualizer() {
  const micRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const recordRef = useRef<RecordPlugin | null>(null);
  const unsubscribersRef = useRef<(() => void)[]>([]);
  const { state, dispatch } = useAudio();

  useEffect(() => {
    let mounted = true;
    const updateDevices = async () => {
      try {
        const list = await navigator.mediaDevices.enumerateDevices();
        const micList = list.filter((d) => d.kind === "audioinput");
        if (!mounted) return;
        if (micList.length > 0 && !state.selectedDevice) {
          dispatch({ type: "setDevice", payload: micList[0].deviceId || "" });
        }
      } catch (err) {
        console.error("error enumerating devices", err);
      }
    };
    updateDevices();
    navigator.mediaDevices.addEventListener("devicechange", updateDevices);
    return () => {
      mounted = false;
      navigator.mediaDevices.removeEventListener("devicechange", updateDevices);
    };
  }, [state.selectedDevice, dispatch]);

  useEffect(() => {
    initWaveSurfer(recordRef, wavesurferRef, micRef, dispatch);
    
    return () => {
      unsubscribersRef.current.forEach((unsubscribe) => {
        try {
          unsubscribe();
        } catch {}
      });
      unsubscribersRef.current = [];
      if (wavesurferRef.current) {
        try {
          wavesurferRef.current.destroy();
        } catch {}
      }
      state.recordings.forEach((r) => URL.revokeObjectURL(r.url));
    };
  }, []);

  const onRecord = async () => {
    if (state.isRecording || state.isPaused) {
      await handlePause(recordRef);
    }
    if (!state.isRecording) {
      await handleRecord(recordRef, state.selectedDevice);
    }
    dispatch({ type: state.playToggle ? "pause" : "record" });
  };

  const onStop = async () => {
    await handleStop(recordRef);
    dispatch({ type: "stop" });
  };

  return (
    <div className="lg:p-8 p-3 max-w-4xl mx-auto">
      <p className="text-md text-center mb-4">{state.progress}</p>
      <div
        ref={micRef}
        className="rounded p-4 mb-4 border border-gray-200"
        style={{ minHeight: 100 }}
      />
      <div className="flex gap-5 justify-center ">
        <RecorderButton handler={onRecord}>
          <div>
            {!state.playToggle ? (
              <Play className="text-white" />
            ) : (
              <Pause className="text-white" />
            )}
          </div>
        </RecorderButton>
        <RecorderButton handler={onStop}>
          <div>
            <Square className="text-white" />
          </div>
        </RecorderButton>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center pt-4 space-y-10">
          <Transcript />
          {state.recordings.length > 0 && <RecordList />}
        </div>
      </div>
    </div>
  );
}