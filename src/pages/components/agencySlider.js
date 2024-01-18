import React from "react";
import Slider from "react-slick";
import AgencyText from "./agencyText";

export default function AgencySlider() {
  const list = [
    {
      firstText: "Introduce Our Creative",
      secondText: "Digital Agency.",
    },
    {
      firstText: "Introduce Our Creative",
      secondText: "Team Member.",
    },
    {
      firstText: "Introduce Our Creative",
      secondText: "Support Member.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
          {list.map((item, index) => {
            return (
              <AgencyText
                firstText={item.firstText}
                secondText={item.secondText}
              />
            );
          })}
      </Slider>
    </div>
  );
}
