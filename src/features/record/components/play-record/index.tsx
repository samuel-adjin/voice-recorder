import Header from "@/features/common/components/header";
import React from "react";
import AudioVisualizer from "@/features/common/components/audio-visualizer";

const RecordVoice = () => {
  return (
    <div>
      <Header>
        <div className="mb-5">
          <AudioVisualizer />
        </div>
      </Header>
    </div>
  );
};

export default RecordVoice;
