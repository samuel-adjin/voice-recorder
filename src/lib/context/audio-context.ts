"use client"

import { createContext } from "react";
import { AudioAction, AudioState } from "../reducers/audio-reducer"

type AudioContextType = {
    state: AudioState
    dispatch: React.Dispatch<AudioAction>
}

export const AudioContext = createContext<AudioContextType | undefined>(undefined);