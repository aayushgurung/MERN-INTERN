import React from "react";
import logo1 from "../../assets/1logo.svg";
import logo2 from "../../assets/2logo.svg";
import logo3 from "../../assets/3logo.svg";
import logo4 from "../../assets/4logo.svg";
import logo5 from "../../assets/5logo.svg";
import logo6 from "../../assets/mailchimp.svg";

function LogoSection() {
  return (
    <>
      {" "}
      <div className="pt-[64px] h-[160px] pb-[64px] gap-[64px] w-full flex mx-auto bg-[#2B63D9] items-center justify-center">
        <div className="flex gap-[64px] flex-row text-center">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
    </>
  );
}

export default LogoSection;
