"use client";
import { Recording } from "@/features/common/components/audio-visualizer";
import { Download } from "lucide-react";

type RecordingCardProps = {
  recording: Recording;
  count: number;
  onDelete:any
};
const RecordingCard = ({ recording, count,onDelete }: RecordingCardProps) => {

  let recordingName = count < 10 ? `voice_00${count}` : `voice_0${count}`;
  return (
    <div className="p-3 rounded-md shadow-sm flex justify-around bg-white xl:text-xs text-sm text-gray-400 items-center hover:outline-1 hover:outline-blue-500">
      <div className=" ">
        <audio controls src={recording.url} className="flex-1 h-10" />
      </div>
      <div className="">{recordingName}</div>
      <a
        className="flex items-center gap-1 cursor-pointer xl:text-xs text-blue-500"
        href={recording.url}
        download={recording.url}
      >
        <Download className="w-3 " />
        Download
      </a>
      <button
        className=" outline-1 p-1 w-20 rounded-md text-red-500 outline-gray-300 xl:text-xs font-bold cursor-pointer"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default RecordingCard;
