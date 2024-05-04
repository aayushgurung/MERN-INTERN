import React from "react";
import Content from "../Content";

const Card = () => {
  return (
    <>
      <Content style={`gap-[12px] h-[80px] `}>
        <div className=" h-[80px] flex flex-col items-center">
          <div className="text-[32px] font-bold">Messaging for all</div>
          <div className="text-[16px] text-[#5F6D7E]">
            User generated content in real-time will have multiple touchpoints
            for offshoring.
          </div>
        </div>
      </Content>
    </>
  );
};

export default Card;
