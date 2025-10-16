import React, { useContext } from 'react'
import { AudioContext } from '../context/audio-context'

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context == undefined) {
    throw new Error("useAudio must be within a AudioProvider")
  }
  return context;
}

