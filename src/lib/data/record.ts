import { RefObject } from "react";


export const handlePause = async (recordRef: RefObject<any>) => {
    if (!recordRef.current) return;
    try {
        if (recordRef.current.isPaused?.()) {
            await recordRef.current.resumeRecording();
        } else {
            await recordRef.current.pauseRecording();
        }
    } catch (err) {
        console.error("pause/resume error", err);
    }
};

export const handleRecord = async (recordRef: RefObject<any>, selectedDevice: string) => {
    if (!recordRef.current) {
        console.warn("record plugin not initialized yet");
        return;
    }
    try {
        const options: any = {};
        if (selectedDevice) options.deviceId = selectedDevice;
        await recordRef.current.startRecording(options);
    } catch (err) {
        console.error("failed to start/stop recording", err);
    }
};

export const handleStop = async (recordRef: RefObject<any>) => {
    if (!recordRef.current) return;
    try {
        if (recordRef.current.isRecording?.() || recordRef.current.isPaused?.()) {
            await recordRef.current.stopRecording();
        }
    } catch (err) {
        console.error("stop recording error", err);
    }
};