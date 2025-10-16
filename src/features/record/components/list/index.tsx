import React from "react";
import RecordingCard from "../recording-card";
import Pagination from "../pagination";
import { useAudio } from "@/lib/hooks/useAudio";

const RecordList = () => {
  const { state, dispatch } = useAudio();

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between ">
        <h1 className=" xl:text-xs text-sm font-bold">Recording List</h1>
      </div>
      {state.recordings.map((d, index) => (
        <RecordingCard
          recording={d}
          key={d.url + index}
          count={index + 1}
          onDelete={() => {
            dispatch({ type: "delete", payload: index });
          }}
        />
      ))}
      <div>{state.recordings.length > 4 && <Pagination />}</div>
    </div>
  );
};

export default RecordList;
