import React, { MouseEventHandler, ReactNode } from "react";

type RecorderButtonProps = {
  children: ReactNode;
  handler: MouseEventHandler<HTMLButtonElement> | undefined;
};

const RecorderButton = ({ children, handler }: RecorderButtonProps) => {
  return (
    <div>
      <button
        className="rounded-full p-3 bg-[#1268e8] w-10 h-10 flex items-center justify-center cursor-pointer shadow-md"
        onClick={handler}
      >
        {children}
      </button>
    </div>
  );
};

export default RecorderButton;
