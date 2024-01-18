import React from "react";
import Title from "./components/title";
import GalleryCard from "./components/galleryCard";
import MainBtn from "./components/mainBtn";

export default function WorkGallery() {
  const list = [
    {
      title: "#WEB DESIGN",
      subTitle1: "Ecommerce Product",
      subTitle2: "Landing",
      cartStyle: "bg-galleryImg1",
    },
    {
      title: "#WEB DESIGN",
      subTitle1: "Ecommerce Product",
      subTitle2: "Landing",
      cartStyle: "bg-galleryImg2",
    },
    {
      title: "#WEB DESIGN",
      subTitle1: "Ecommerce Product",
      subTitle2: "Landing",
      cartStyle: "bg-galleryImg3",
    },
    {
      title: "#WEB DESIGN",
      subTitle1: "Ecommerce Product",
      subTitle2: "Landing",
      cartStyle: "bg-galleryImg4",
    },
    {
      title: "#WEB DESIGN",
      subTitle1: "Ecommerce Product",
      subTitle2: "Landing",
      cartStyle: "bg-galleryImg5",
    },
    {
      title: "#WEB DESIGN",
      subTitle1: "Ecommerce Product",
      subTitle2: "Landing",
      cartStyle: "bg-galleryImg6",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto my-20 space-y-20">
      <div>
        <Title title="WORK GALLERY" bigTitle="Recent Case Studies" />
      </div>
      <div className="px-10 sm:px-20 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, index) => {
            return (
              <GalleryCard
                title={item.title}
                subTitle1={item.subTitle1}
                subTitle2={item.subTitle2}
                cartStyle={item.cartStyle}
              />
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <a href="/">
          <MainBtn
            btnText="VIEW ALL PROJECT"
            btnStyle="bg-main-purple hover:bg-transparent hover:text-main-purple"
          />
        </a>
      </div>
    </div>
  );
}
