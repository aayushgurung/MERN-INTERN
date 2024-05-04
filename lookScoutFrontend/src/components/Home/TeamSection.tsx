import React from "react";
import { Container, Content } from "../../components";
import socialMedia from "../../assets/socialmedia.svg";
import teamSection1 from "../../../public/images/team-section/TeamSection1.png";
import teamSection2 from "../../../public/images/team-section/TeamSection2.png";
import teamSection3 from "../../../public/images/team-section/TeamSection3.png";

const TeamSection = () => {
  return (
    <>
      <Container style={`h-[750px] flex-col`}>
        <Content style={`gap-[12px] h-[80px] `}>
          <div className=" h-[80px] flex flex-col items-center">
            <div className="text-[32px] font-bold">The Core of Our Team</div>
            <div className="text-[16px] text-[#5F6D7E] text-center">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment <br /> of people and great
              talent that truly rocks.
            </div>
          </div>
        </Content>
        <Content style={`gap-[64px] h-[182px] `}>
          <div className="flex flex-row w-[1216px] h-[182px] gap-[32px]">
            <div className="w-[384px] gap-[16px] flex flex-col">
              <div>
                <img src={teamSection2} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="font-semibold text-[22px]">Morgan Drew</div>
                  <div className="text-justify text-[#5F6D7E]">Manager</div>
                </div>
                <div>
                  <div className="text-justify text-[#5F6D7E]">
                    <img src={socialMedia} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[384px] gap-[16px] flex flex-col">
              <div>
                <img src={teamSection1} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="font-semibold text-[22px]">
                    Jeffery Walker
                  </div>
                  <div className="text-justify text-[#5F6D7E]">
                    Lead Designer
                  </div>
                </div>
                <div>
                  <div className="text-justify text-[#5F6D7E]">
                    <img src={socialMedia} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[384px] gap-[16px] flex flex-col">
              <div>
                <img src={teamSection3} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="font-semibold text-[22px]">Andrew Steve</div>
                  <div className="text-justify text-[#5F6D7E]">
                    UI/UX Designer
                  </div>
                </div>
                <div>
                  <div className="text-justify text-[#5F6D7E]">
                    <img src={socialMedia} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default TeamSection;
