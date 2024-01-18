import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function AboutCompanyCard(props) {
  const [counterInView, setCounterInView] = useState(false);

  const handleScroll = () => {
    const counterSection = document.querySelector("#counter-section");
    if (counterSection) {
      const rect = counterSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setCounterInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${props.cartStyle} flex bg-white dark:bg-black relative before:absolute before:w-full before:h-full before:bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end hover:before:-rotate-6 flex-col items-center group justify-center py-14 px-16 space-y-5 border dark:border-slate-700 rounded-xl before:right-0 before:bottom-0 before:-z-10 before:rounded-xl before:transition-all before:duration-300 before:ease-linear`}
    >
      <div className="group-hover:-translate-y-3 transition-all duration-300 ease-linear">
        <img src={props.cartImg} alt="" />
      </div>
      <div
        className={`${props.titleStyle} font-bold text-center hover:text-main-purple transition-all duration-300 ease-linear`}
      >
        <Link>
          {counterInView && (
            <CountUp delay={.4} duration={5} start={0} end={props.cartTitle} />
          )}
          +
        </Link>
      </div>
      <div
        className={`${props.textStyle} font-bold text-center dark:text-white group-hover:text-main-purple transition-all duration-300 ease-linear`}
      >
        {props.cartText}
      </div>
    </div>
  );
}
