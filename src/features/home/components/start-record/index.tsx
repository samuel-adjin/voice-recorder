"use client";

import Header from "@/features/common/components/header";
import React from "react";
import Image from "next/image";
import mic from "../../../../../public/mic.png";
import Wave from "@/features/common/components/wave-shape";
import Card from "../card";
import { useRouter } from "next/navigation";

const data = [
  {
    icon: "",
    title: "100% Free to Use",
    content:
      "This tool is 100% free to use, Simply record your audio and download an MP3 at no cost. Ordering a Rev transcription of the recording is totally optional",
  },
  {
    icon: "",
    title: "Transcription!",
    content:
      "The transcribe featue converts speech to a text transcript with each speaker individually separated",
  },
  {
    icon: "",
    title: "Downloadable",
    content:
      "Our online voice recorder allows you to download a free MP3 after the audio has been recorded",
  },
];

const StartRecord = () => {
  const router = useRouter();
  return (
    <div className="lg:space-y-36">
      <Header>
        <div>
          <div className="flex justify-center mb-20">
            <Image src={mic} height={100} width={100} alt="microphone" />
          </div>
          <div className="">
            <h1 className="text-xs text-gray-500 text-center">
              To start recording, press the{" "}
              <span className="text-black">&rdquo;Start Recording&rdquo;</span> button and
              start recording
            </h1>
          </div>
          <div className="flex justify-center my-5">
            <button
              type="button"
              className="py-2 px-5  bg-[#1671ef] text-xs rounded-md text-gray-300 cursor-pointer"
              onClick={() => {
                router.push("/record");
              }}
            >
              Start Recording
            </button>
          </div>
        </div>
      </Header>
      <Wave>
        <div className="lg:mx-56 mx-5 lg:p-10 pt-10 grid lg:grid-cols-3 lg:gap-10 gap-3 pb-10 lg:pb-0 ">
          {data.map((d, index) => (
            <Card
              title={d.title}
              content={d.content}
              key={index + d.title}
            />
          ))}
        </div>
      </Wave>
    </div>
  );
};

export default StartRecord;
