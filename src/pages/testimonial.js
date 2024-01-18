import React from "react";
import Title from "./components/title";
import Slider from "react-slick";
import TestimonialSlider from "./components/testimonialSlider";
import Client1 from "../assets/img/client-big-1.jpg";
import Client2 from "../assets/img/client-big-2.jpg";
import Client3 from "../assets/img/client-big-3.jpg";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const list = [
    {
      text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along",
      img: Client1,
      prof: "Rasalina De Willmson (CEO@Orix)",
    },
    {
      text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along",
      img: Client2,
      prof: "Rasalina De Willmson (CEO@Orix)",
    },
    {
      text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along",
      img: Client3,
      prof: "Rasalina De Willmson (CEO@Orix)",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-5 2xl:px-0">
      <div className="bg-blackimg py-36 rounded-3xl space-y-14">
        <div>
          <Title
            title="CLIENT TESTIMONIAL"
            bigTitle="What Our Customer Say"
            titleStyle="text-white lg:text-4xl pt-5"
          />
        </div>
        <div>
          <Slider {...settings}>
            {list.map((item, index) => {
              return (
                <TestimonialSlider
                  text={item.text}
                  img={item.img}
                  prof={item.prof}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
