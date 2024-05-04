import React from "react";
import Container from "../Container";
import Content from "../Content";
import checkIcon from "../../assets/check.svg";
import buttonArrow from "../../assets/button Arrow.svg";
import Button from "../Button";

const Demonstrate = () => {
  return (
    <>
      <Container style="h-[688px]">
        <Content style={`gap-[124px]`}>
          {" "}
          <div className="flex flex-row gap-[40px] h-[560px] justify-between">
            <div className=" flex flex-col w-[532px] gap-[24px] justify-center">
              <div className=" flex flex-col items-center">
                <div className="text-[32px] font-semibold leading-[42px] text-[#272D37]">
                  Demonstrate branding consequently think outside
                </div>
                <div className="font-normal text-[16px] leading-[24px] text-[#5F6D7E]">
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                  magna vulputate pellentesque a diam tincidunt. Aenean
                  malesuada tellus <br /> tellus faucibus mauris quisque mauris
                  in.
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row items-center gap-[8px]">
                  <div>
                    <img src={checkIcon} alt="" />
                  </div>
                  <div>Enterprise-grade security</div>
                </div>
                <div className="flex flex-row items-center gap-[8px]">
                  <div>
                    <img src={checkIcon} alt="" />
                  </div>
                  <div>99.9% guaranteed uptime SLA</div>
                </div>
                <div className="flex flex-row items-center gap-[8px]">
                  <div>
                    <img src={checkIcon} alt="" />
                  </div>
                  <div>Designated customer success team</div>
                </div>
              </div>
              <div className="">
                <Button variant="blue">
                  <div className="flex flex-row gap-[10px] items-center">
                    <div>Start Now</div>{" "}
                    <div className="">
                      <img src={buttonArrow} alt="" />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="border flex flex-row items-center">445</div>
          </div>{" "}
        </Content>
      </Container>
    </>
  );
};

export default Demonstrate;
