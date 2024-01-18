import React from "react";
import MainBtn from "./components/mainBtn";

export default function Meeting() {
  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-5">
      <div className="bg-blackimg bg-no-repeat pt-28 pb-36 rounded-3xl flex flex-col items-center px-2 xl:px-32 space-y-7">
        <div className="font-extrabold text-transparent xl:text-6xl bg-clip-text bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end py-4 text-3xl max-md:leading-[40px] font-pop text-center">
          Enough Talk, Let's Build Something Unique & Creative
        </div>
        <div>
          <MainBtn btnText="JUMP FOR A MEETING" />
        </div>
      </div>
    </div>
  );
}
