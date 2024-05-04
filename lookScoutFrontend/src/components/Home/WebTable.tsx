import React from "react";
import { Container, Content } from "../../components";
import labelNew from "../../assets/labelNew.svg";
import arrow from "../../assets/arrow.svg";

const WebTable = () => {
  return (
    <>
      <Container style={`h-[788px] flex-col`}>
        <Content style={`gap-[12px] h-[80px] `}>
          <div className=" h-[80px] flex flex-col items-center">
            <div className="text-[32px] font-bold">
              Frequently asked questions
            </div>
            <div className="text-[16px] text-[#5F6D7E] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the <br /> industry's standard
              dummy text ever since the 1500s,
            </div>
          </div>
        </Content>
        <Content style={`gap-[64px] h-[788px] rounded-lg`}>
          <div className="flex flex-col w-[1216px] ">
            <div className="py-[20px] px-[32px] flex flex-row h-[92px] border items-center">
              <div className="flex flex-col w-[1097px]">
                <div className="text-[18px] font-semibold leading-[28px]">
                  Authentification Issues
                </div>
                <div className="text-[16px] text-[#5F6D7E] font-normal leading-[24px]">
                  Porttitor nec est nisi, id nunc.
                </div>
              </div>
              <div className="flex flex-col">
                <img src={labelNew} alt="" />
              </div>
            </div>
            <div className="py-[16px] px-[32px] flex flex-row h-[80px] border items-center">
              <div className="flex flex-col w-[974px]">
                <div className="text-[18px] font-semibold leading-[28px]">
                  Authentification Issues
                </div>
                <div className="text-[16px] text-[#5F6D7E] font-normal leading-[24px]">
                  Porttitor nec est nisi, id nunc.
                </div>
              </div>
              <div className="flex flex-col w-[174px]">Updated Last Week</div>
              <div className="flex flex-col">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="py-[16px] px-[32px] flex flex-row h-[80px] border items-center">
              <div className="flex flex-col w-[974px]">
                <div className="text-[18px] font-semibold leading-[28px]">
                  Authentification Issues
                </div>
                <div className="text-[16px] text-[#5F6D7E] font-normal leading-[24px]">
                  Porttitor nec est nisi, id nunc.
                </div>
              </div>
              <div className="flex flex-col w-[174px]">Updated Last Week</div>
              <div className="flex flex-col">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="py-[16px] px-[32px] flex flex-row h-[80px] border items-center">
              <div className="flex flex-col w-[974px]">
                <div className="text-[18px] font-semibold leading-[28px]">
                  Authentification Issues
                </div>
                <div className="text-[16px] text-[#5F6D7E] font-normal leading-[24px]">
                  Porttitor nec est nisi, id nunc.
                </div>
              </div>
              <div className="flex flex-col w-[174px]">Updated Last Week</div>
              <div className="flex flex-col">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="py-[16px] px-[32px] flex flex-row h-[80px] border items-center">
              <div className="flex flex-col w-[974px]">
                <div className="text-[18px] font-semibold leading-[28px]">
                  Authentification Issues
                </div>
                <div className="text-[16px] text-[#5F6D7E] font-normal leading-[24px]">
                  Porttitor nec est nisi, id nunc.
                </div>
              </div>
              <div className="flex flex-col w-[174px]">Updated Last Week</div>
              <div className="flex flex-col">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="py-[16px] px-[32px] flex flex-row h-[80px] border items-center">
              <div className="flex flex-col w-[974px]">
                <div className="text-[18px] font-semibold leading-[28px]">
                  Authentification Issues
                </div>
                <div className="text-[16px] text-[#5F6D7E] font-normal leading-[24px]">
                  Porttitor nec est nisi, id nunc.
                </div>
              </div>
              <div className="flex flex-col w-[174px]">Updated Last Week</div>
              <div className="flex flex-col">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default WebTable;
