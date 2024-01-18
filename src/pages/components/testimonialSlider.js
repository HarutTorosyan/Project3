import React from "react";

export default function TestimonialSlider(props) {
  return (
    <div className="font-rob flex flex-col items-center space-y-5">
      <div className="text-white px-5 sm:px-16 md:px-28 2xl:px-72 font-bold text-2xl text-center">{props.text}</div>

      <div className="">
        <img src={props.img} className="rounded-full" alt="" />
      </div>
      <div className="text-white">{props.prof}</div>
    </div>
  );
}
