import { ActionDispatch, RefObject } from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record.esm.js";
import { AudioAction } from "../reducers/audio-reducer";

const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const mm = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, "0");
    const ss = (totalSeconds % 60).toString().padStart(2, "0");
    return `${mm}:${ss}`;
};

export const initWaveSurfer = (recordRef: RefObject<RecordPlugin |null>, wavesurferRef: RefObject<WaveSurfer | null>, micRef: RefObject<HTMLDivElement | null>, dispatch: ActionDispatch<[action: AudioAction]>) => {
    if (wavesurferRef.current) {
        try {
            wavesurferRef.current.destroy();
        } catch { }
        wavesurferRef.current = null;
        recordRef.current = null;
    }

    if (!micRef.current) return;

    const recordPlugin = RecordPlugin.create({
        renderRecordedAudio: false,
        scrollingWaveform: true,
        continuousWaveform: false,
        continuousWaveformDuration: 30,
    });

    wavesurferRef.current = WaveSurfer.create({
        container: micRef.current,
        waveColor: "rgb(27,101,217)",
        progressColor: "rgb(100, 0, 100)",
        plugins: [recordPlugin],
    });

    recordRef.current = recordPlugin;

    try {
        recordRef.current.on("record-end", (blob: Blob) => {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            const ext = blob.type.split(";")[0].split("/")[1] || "webm";
            const filename = `recording.${ext}`;
            dispatch({ type: "addRecording", payload: { url, blob, filename } });
            dispatch({ type: "stop" });
        });

        recordRef.current.on("record-progress", (time: number) => {
            const formattedTime = formatTime(
                typeof time === "number" ? time : time * 1000
            );
            dispatch({ type: "setProgress", payload: formattedTime });
        });
    } catch (e) {
        console.warn("could not attach record plugin listeners", e);
    }
};