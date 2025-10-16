"use client"


import React, { ReactNode, useReducer } from "react";
import { audioReducer, initialState } from "../reducers/audio-reducer";
import { AudioContext } from "./audio-context";

type AudioProviderProps = {
  children: ReactNode;
};

const AudioProvider = ({ children }: AudioProviderProps) => {
  const [state, dispatch] = useReducer(audioReducer, initialState);

  return <AudioContext value={{ state, dispatch }}>{children}</AudioContext>;
};

export default AudioProvider;
