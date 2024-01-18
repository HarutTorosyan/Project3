import React from "react";
import Title from "./components/title";
import MainBtn from "./components/mainBtn";
import { FaPlay } from "react-icons/fa";
import AboutCompanyCard from "./components/AboutCompanyCard";
import Customers from "../assets/img/Vector9.svg";

export default function AboutCompany() {

  const list = [
    {
      cartImg: Customers,
      cartTitle: 329,
      cartText: "Staticfied Customers",
    },
    {
      cartImg: Customers,
      cartTitle: 89,
      cartText: "Staticfied Customers",
    },
    {
      cartImg: Customers,
      cartTitle: 149,
      cartText: "Staticfied Customers",
    },
    {
      cartImg: Customers,
      cartTitle: 208,
      cartText: "Staticfied Customers",
    },
  ];

  return (
    <div className="px-5 max-w-screen-2xl mx-auto my-20">
      <div className="bg-blackimg bg-center bg-no-repeat rounded-3xl font-rob z-20 relative">
        <div className="pb-52 pt-32 px-10 space-y-10">
          <div>
            <Title
              title="ABOUT COMPANY"
              bigTitle="Refreshingly Unique Company Mission Visson"
              titleStyle="text-white text-2xl md:px-16 lg:px-32 md:text-4xl lg:text-5xl"
            />
          </div>
          <div className="text-[#A4A6AA] md:px-20 lg:px-64 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            labore reprehenderit distinctio? Rerum, repudiandae! Atque
            recusandae minima voluptate distinctio, facilis non alias magnam
            corporis eum! In reiciendis odit voluptates est?
          </div>
          <div className="flex max-lg:flex-col max-lg:space-y-5 justify-center items-center lg:space-x-5">
            <div>
              <MainBtn
                btnText="JUMP FOR A QUCK MEETING"
                btnStyle="bg-main-purple border-2 border-main-purple hover:bg-transparent hover:text-main-purple tracking-widest"
              />
            </div>

            <div>
              <MainBtn
                btnText="PLAY DEMO VIDEO"
                btnStyle="flex items-center tracking-widest"
              >
                <FaPlay className="text-white ml-2" />
              </MainBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 dark:bg-[#181818] -mt-24 rounded-3xl">
        <div className="pb-28">
          <div className="max-w-screen-xl mx-auto">
            <div id="counter-section" className="relative z-30 font-rob grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-3 sm:px-5 md:px-10 2xl:px-0">
              {list.map((item, index) => {
                return (
                  <AboutCompanyCard
                    key={index}
                    cartImg={item.cartImg}
                    cartTitle={item.cartTitle}
                    cartText={item.cartText}
                    textStyle="text-lg font-medium"
                    cartStyle="space-y-12"
                    titleStyle="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
