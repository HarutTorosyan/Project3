import React from "react";

export default function Title(props) {
  return (
    <div className="text-center space-y-3">
      <div className="text-sm font-pop inline text-white py-1 px-3 rounded-md bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end font-bold">
        {props.title}
      </div>
      <div className={`${props.titleStyle} text-xl md:text-2xl lg:text-5xl font-pop font-bold text-black dark:text-white`}>
        {props.bigTitle}
      </div>
    </div>
  );
}
