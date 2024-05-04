import React from "react";
import { Container, Content } from "../../components";
import featureIcon from "../../assets/feature-icon.svg";

const Features = () => {
  return (
    <>
      <Container style={`h-[454px] flex-col`}>
        <Content style={`gap-[12px] h-[80px] `}>
          <div className=" h-[80px] flex flex-col items-center">
            <div className="text-[32px] font-bold">Messaging for all</div>
            <div className="text-[16px] text-[#5F6D7E]">
              User generated content in real-time will have multiple touchpoints
              for offshoring.
            </div>
          </div>
        </Content>
        <Content style={`gap-[64px] h-[182px] `}>
          <div className="flex flex-row w-[1216px] h-[182px] gap-[32px]">
            <div className="w-[384px] gap-[20px] flex flex-col">
              <div>
                <img src={featureIcon} alt="" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-semibold text-[22px]">
                  Easier Work Organization
                </div>
                <div className="text-justify text-[#5F6D7E]">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly timely deliverables for real-time
                  schemas.{" "}
                </div>
              </div>
            </div>
            <div className="w-[384px] gap-[20px] flex flex-col">
              <div>
                <img src={featureIcon} alt="" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-semibold text-[22px] ">
                  Easier Work Organization
                </div>
                <div className="text-justify text-[#5F6D7E]">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly timely deliverables for real-time
                  schemas.{" "}
                </div>
              </div>
            </div>
            <div className="w-[384px] gap-[20px] flex flex-col">
              <div>
                <img src={featureIcon} alt="" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-semibold text-[22px]">
                  Easier Work Organization
                </div>
                <div className="text-justify text-[#5F6D7E]">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly timely deliverables for real-time
                  schemas.{" "}
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Features;
