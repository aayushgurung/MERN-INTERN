import React from "react";
import Button from "../Button";

const CallToAction = () => {
  return (
    <>
      <div className="pt-[64px] h-[318px] pb-[64px] gap-[64px] w-full flex mx-auto bg-[#2B63D9] items-center justify-center">
        <div className="flex gap-[8px] flex-col text-center">
          <div className="font-semibold text-[14px] text-[#FFFFFF] leading-[20px]">
            1% OF THE INDUSTRY
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="text-[32px] leading-[42px] font-semibold text-[#FFFFFF] ">
              Welcome to your new digital reality that <br /> which will rock
              your world truly at all.
            </div>
            <div className="flex gap-[16px] flex-row justify-center font-normal text-[#FFFFFF] ">
              <Button variant="white">Sign Up</Button>
              <Button variant="blue">Log In</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
