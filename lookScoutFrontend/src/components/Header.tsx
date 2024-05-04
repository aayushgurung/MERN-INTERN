import React from "react";

import lookScoutLogo from "../assets/Lookscoutlogo.svg";
import Button from "./Button";
const Header = () => {
  return (
    <>
      <div className="h-[86px]  py-[20px] px-[160px] border-b-[1px] border-b-[#EAEBF0] fixed bg-[#F8F9FB] w-full">
        <div className="justify-between flex flex-row gap-[10px] px-[32px] h-[46px] relative">
          <div className="flex flex-row gap-[64px] items-center">
            <div>
              <img src={lookScoutLogo} alt="" />
            </div>
            <div className="flex flex-row gap-[32px] ">
              <div className="font-semibold text-[15px]">Home</div>
              <div className="font-semibold text-[15px]">Our Products</div>
              <div className="font-semibold text-[15px]">Resources</div>
              <div className="font-semibold text-[15px]">Contacts</div>{" "}
            </div>
          </div>
          <div className="flex flex-row gap-[24px]">
            <div className="font-semibold text-[15px]">
              <Button variant="">Sign Up</Button>
            </div>
            <div className="font-semibold text-[15px]">
              <Button variant="blue">Log In</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
