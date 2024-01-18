import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function GalleryCard(props) {
  return (
    <div
      className={`${props.cartStyle} flex font-rob bg-center bg-cover relative before:absolute before:w-full before:h-full before:bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end hover:before:-rotate-[4deg] flex-col items-center group justify-center pt-96 pb-5 rounded-xl before:right-0 before:bottom-0 before:-z-20 before:rounded-xl before:transition-all before:duration-300 before:ease-linear after:absolute after:w-full after:h-0 after:hover:h-full after:bg-gradient-to-t after:from-black after:bottom-0 after:rounded-b-xl after:z-10 after:transition-all after:duration-500 `}
    >
      <div className="flex flex-col justify-center items-center translate-y-4 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-400 ease-linear text-white relative z-30">
        <div className="font-bold text-sm">{props.title}</div>
        <div className="text-center font-bold text-3xl">
          <a href="/" className="group">
            <div className="relative before:absolute before:w-0 before:h-[2px] before:left-0 before:bottom-0 before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-linear">
              {props.subTitle1}
            </div>
            <div className="relative inline-block before:absolute before:w-0 before:h-[2px] before:left-0 before:bottom-0 before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-linear">
              {props.subTitle2}
            </div>
          </a>
        </div>
        <div className="text-xl">
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
