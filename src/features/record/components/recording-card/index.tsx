"use client";
import { Download } from "lucide-react";
import { MouseEventHandler } from "react";

type Recording = {
  url: string;
};

type RecordingCardProps = {
  recording: Recording;
  count: number;
  onDelete: MouseEventHandler<HTMLButtonElement> | undefined;
};

const RecordingCard = ({ recording, count, onDelete }: RecordingCardProps) => {
  const recordingName = count < 10 ? `voice_00${count}` : `voice_0${count}`;

  return (
    <div className="p-3 rounded-md shadow-sm bg-white  hover:outline-1 hover:outline-blue-500 w-full max-w-4xl">
      {/* Desktop layout */}
      <div className="hidden sm:flex sm:justify-around sm:items-center sm:gap-4 text-sm text-gray-400">
        <div className="flex-shrink-0">
          <audio controls src={recording.url} className="h-10" />
        </div>
        <div className="flex-shrink-0">{recordingName}</div>
        <a
          className="flex items-center gap-1 cursor-pointer text-blue-500 flex-shrink-0"
          href={recording.url}
          download={recordingName}
        >
          <Download className="w-3" />
          Download
        </a>
        <button
          className="outline-1 p-1 w-20 rounded-md text-red-500 outline-gray-300 font-bold cursor-pointer flex-shrink-0"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      {/* Mobile layout */}
      <div className="flex flex-col gap-3 sm:hidden">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 font-medium">
            {recordingName}
          </div>
          <button
            className="outline-1 px-3 py-1 rounded-md text-red-500 outline-gray-300 text-sm font-bold cursor-pointer"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <div className="w-full">
          <audio controls src={recording.url} className="w-full h-10" />
        </div>
        <a
          className="flex items-center justify-center gap-2 cursor-pointer text-blue-500 text-sm py-2 border border-blue-500 rounded-md hover:bg-blue-50"
          href={recording.url}
          download={recordingName}
        >
          <Download className="w-4" />
          Download
        </a>
      </div>
    </div>
  );
};

export default RecordingCard;
