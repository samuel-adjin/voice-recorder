import { Recording } from "@/features/common/components/audio-visualizer"

export type AudioState = {
    progress: string,
    selectedDevice: string,
    recordings: Recording[],
    playToggle: boolean,
    isRecording: boolean,
    isPaused: boolean
}

export const initialState: AudioState = {
    progress: "00:00",
    selectedDevice: "",
    recordings: [],
    playToggle: false,
    isRecording: false,
    isPaused: false
}

export type AudioAction =
    | { type: 'delete', payload: number }
    | { type: 'record' }
    | { type: 'pause' }
    | { type: 'stop' }
    | { type: 'setProgress', payload: string }
    | { type: 'addRecording', payload: Recording }
    | { type: 'setDevice', payload: string }

export function audioReducer(state: AudioState, action: AudioAction): AudioState {
    switch (action.type) {
        case 'delete':
            const removed = state.recordings[action.payload];
            if (removed) {
                try {
                    URL.revokeObjectURL(removed.url);
                } catch (err) {
                    console.error("Error revoking URL:", err);
                }
            }
            const recordings = state.recordings.filter(
                (_, index) => index !== action.payload
            );
            return { ...state, recordings };
        case 'record':
            return { ...state, playToggle: true, isRecording: true };
        case 'pause':
            return { ...state, isPaused: !state.isPaused, playToggle: false };
        case 'stop':
            return { ...state, playToggle: false, isRecording: false, isPaused: false, progress: "00:00" };
        case 'setProgress':
            return { ...state, progress: action.payload };
        case 'addRecording':
            return { ...state, recordings: [action.payload, ...state.recordings] };
        case 'setDevice':
            return { ...state, selectedDevice: action.payload };
        default:
            return state;
    }
}