import React from "react";

export default function MainBtn(props) {
  return (
    <div>
      <button
        className={`${props.btnStyle} px-10 rounded-[500px] py-3 border text-white hover:bg-main-purple transition-all duration-300 ease-linear hover:border-main-purple font-bold font-pop`}
      >
        {props.btnText}
        {props.children}
      </button>
    </div>
  );
}
