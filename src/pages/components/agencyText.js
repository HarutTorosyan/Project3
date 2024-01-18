import React from "react";
import MainBtn from "./mainBtn";

export default function AgencyText(props) {
  return (
    <div className="text-center px-2 space-y-14">
      <h1 className="font-extrabold text-transparent xl:text-8xl bg-clip-text bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end py-4 text-5xl max-md:leading-[64px]">
        {props.firstText} <br /> {props.secondText}
      </h1>

      <MainBtn btnText="SEE NEROX SERVICES" />
    </div>
  );
}
