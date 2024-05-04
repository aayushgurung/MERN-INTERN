import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="pt-[64px] h-[492px] pb-[64px] gap-[64px] w-full flex
       mx-auto bg-[#F8F9FB] items-center justify-center "
      >
        <div className="flex gap-[16px] flex-col text-center">
          <div className="font-semibold text-[14px] text-[#437EF7] leading-[20px]">
            1% OF THE INDUSTRY
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="text-[52px] leading-[60px] font-bold text-[#272D37] ">
              Hype got you here. <br /> Stay for the support.
            </div>
            <div className="text-[18px] leading-[26px] font-normal text-[#5F6D7E] text-center ">
              We've been told it is possible to revolutionize the payment
              industry. We <br /> have not reinvented the wheel, we decided to
              build upon it - successfully.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
