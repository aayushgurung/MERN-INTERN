import React from "react";
import { Container, Content } from "../components";
import labelNew from "../../assets/labelNew.svg";
import arrow from "../../assets/arrow.svg";
import lookScoutLogo from "../assets/Lookscoutlogo.svg";
import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import google from "../assets/footer/google.svg";
import apple from "../assets/footer/apple.svg";

function Footer() {
  return (
    <>
      <Container style={`h-[496px] flex-col`}>
        <Content style={`gap-[12px] h-[216px] `}>
          <div className=" h-[80px] flex flex-row justify-between items-center border">
            <div className="border flex flex-col gap-[16px]">
              <div>
                <img src={lookScoutLogo} alt="" />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div>
                  Generate outside the box <br /> thinking with the possibility
                  to <br />
                  targtet the low.
                </div>
                <div className="flex flex-row gap-[24px]">
                  <img src={facebook} alt="" />
                  <img src={google} alt="" />
                  <img src={apple} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>
            <div className="border flex flex-col gap-[24px]">
              <div>Products</div>
              <div className="flex flex-col">
                <div>Features</div>
                <div>Solutions</div>
                <div>Integrations</div>
                <div>Enterprise</div>
                <div>Solutions</div>
              </div>
            </div>
            <div className="border flex flex-col gap-[24px]">
              <div className="text-[16px] font-semibold leading-[24px]">
                Resources
              </div>
              <div className="flex flex-col">
                <div>Partners</div>
                <div>Community</div>
                <div>Developers</div>
                <div>App</div>
                <div>Blog</div>
              </div>
            </div>
            <div className="border flex flex-col gap-[24px]">
              <div className="text-[16px] font-semibold leading-[24px]">
                Why Choose Us?
              </div>
              <div className="flex flex-col">
                <div>Channels</div>
                <div>Scale</div>
                <div>Watch the Demo</div>
                <div>Our Competition</div>
              </div>
            </div>
            <div className="border flex flex-col gap-[24px]">
              <div className="text-[16px] font-semibold leading-[24px]">
                Company
              </div>
              <div className="flex flex-col">
                <div>About Us</div>
                <div>News</div>
                <div>Leadership</div>
                <div>Media Kit</div>
              </div>
            </div>
          </div>
        </Content>
        <Content style={`gap-[64px] h-[88px] rounded-lg`}>ola</Content>
      </Container>
    </>
  );
}

export default Footer;
