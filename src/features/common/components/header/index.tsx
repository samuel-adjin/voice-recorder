import React, { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div className=" ">
      <div className="mt-10 text-center">
        <div className="lg:text-4xl text-2xl font-bold leading-snug  ">
          Voice Recorder
        </div>
        <p className="lg:text-md text-xs font-light text-gray-500">
          Try Recording Your Sounds Now
        </p>
      </div>
      <div className="flex justify-center ">{children}</div>
    </div>
  );
};

export default Header;
