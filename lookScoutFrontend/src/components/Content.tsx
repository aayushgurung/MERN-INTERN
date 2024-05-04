import React from "react";

type contentProps = {
  children: React.ReactNode;
  style: string;
};

const Content: React.FC<contentProps> = ({ children, style }) => {
  return (
    <>
      <div className={`pl-[32px] pr-[32px] ${style} w-[1280px] mx-auto `}>
        {children}
      </div>
    </>
  );
};

export default Content;
