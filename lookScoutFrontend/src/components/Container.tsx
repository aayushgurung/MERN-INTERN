import React from "react";

type containerProps = {
  children: React.ReactNode;
  style: string;
};

const Container: React.FC<containerProps> = ({ children, style }) => {
  return (
    <>
      <div className={`pt-[64px] pb-[64px] ${style} gap-[64px] w-full flex`}>
        {children}
      </div>
    </>
  );
};

export default Container;
