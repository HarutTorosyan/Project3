import React from "react";
import { Link } from "react-scroll";

export default function TeamCard(props) {
  return (
    <div
      className={`${props.cartStyle} flex font-rob bg-center bg-cover bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end hover:before:-rotate-[4deg] flex-col items-center group justify-center pt-96 pb-5 rounded-xl before:right-0 before:bottom-0 before:-z-20 before:rounded-xl before:transition-all before:duration-300 before:ease-linear after:absolute after:w-full after:h-0 after:hover:h-full after:bg-gradient-to-t after:from-black after:bottom-0 after:rounded-b-xl after:z-10 after:transition-all after:duration-500 `}
    >
      <div className="flex flex-col justify-center items-center translate-y-4 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-400 ease-linear text-white relative z-30 space-y-2">
        <Link>
          <div className="font-medium text-2xl text-white">
            <a
              href="/"
              className="hover:text-main-purple transition-all duration-200 ease-linear font-pop"
            >
              {props.title}
            </a>
          </div>
        </Link>
        <div className="text-sm font-bold text-main-purple">{props.prof}</div>
        <div className="flex items-center justify-center text-white space-x-2">
          <a
            href="/"
            className="hover:text-main-purple transition-all duration-200 ease-linear"
          >
            {props.social1}
          </a>
          <a
            href="/"
            className="hover:text-main-purple transition-all duration-200 ease-linear"
          >
            {props.social2}
          </a>
          <a
            href="/"
            className="hover:text-main-purple transition-all duration-200 ease-linear"
          >
            {props.social3}
          </a>
          <a
            href="/"
            className="hover:text-main-purple transition-all duration-200 ease-linear"
          >
            {props.social4}
          </a>
          <a
            href="/"
            className="hover:text-main-purple transition-all duration-200 ease-linear"
          >
            {props.social5}
          </a>
        </div>
      </div>
    </div>
  );
}
