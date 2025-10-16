import React from "react";
import StartRecord from "../../components/start-record";

const HomeTemplate = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-30rem)]">
      <StartRecord />
    </div>
  );
};

export default HomeTemplate;
