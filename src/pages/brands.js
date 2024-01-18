import React from "react";
import Slider from "react-slick";
import Brand1 from "../assets/img/Link-brand-1.png.png";
import Brand2 from "../assets/img/Link-brand-2.png.png";
import Brand3 from "../assets/img/Link-brand-3.png.png";
import Brand4 from "../assets/img/Link-brand-4.png.png";
import Brand5 from "../assets/img/Link-brand-5.png.png";
import BrandsSlider from "./components/brandsSlider";

export default function Brands() {
  const list = [
    {
      brandImg: Brand1,
    },
    {
      brandImg: Brand2,
    },
    {
      brandImg: Brand3,
    },
    {
      brandImg: Brand4,
    },
    {
      brandImg: Brand5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
  };

  return (
    <div className="max-w-screen-xl mx-auto my-20 px-5">
      <div className="">
        <Slider {...settings}>
          {list.map((item, index) => {
            return (
              <BrandsSlider
                brandImg={item.brandImg}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
