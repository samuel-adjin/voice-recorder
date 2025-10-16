import React from "react";

type CardProps = {
  title: string;
  content: string;
};
const Card = ({ content, title }: CardProps) => {
  return (
    <div>
      <div className="flex gap-0.5">
        <h1 className="text-lg text-[#426388] font-bold leading-loose">
          {title}
        </h1>
      </div>
      <p className="text-sm font-thin text-gray-400">{content}</p>
    </div>
  );
};

export default Card;
