import React from "react";
import Title from "./components/title";
import Statergy from "../assets/img/Vector1.svg";
import App from "../assets/img/Vector2.svg";
import WebSite from "../assets/img/Vector3.svg";
import Branding from "../assets/img/Vector4.svg";
import Marketing from "../assets/img/Vector5.svg";
import Product from "../assets/img/Vector6.svg";
import Service from "../assets/img/Vector7.svg";
import Analysis from "../assets/img/Vector8.svg";
import ServiceAreaCard from "./components/serviceAreaCard";

export default function ServiceArea() {
  const list = [
    {
      cartImg: Statergy,
      cartTitle: "Business Statergy",
      cartText: ". . .",
    },
    {
      cartImg: App,
      cartTitle: "Business Statergy",
      cartText: ". . .",
    },
    {
      cartImg: WebSite,
      cartTitle: "Business Statergy",
      cartText: ". . .",
    },
    {
      cartImg: Branding,
      cartTitle: "Branding Design",
      cartText: ". . .",
    },
    {
      cartImg: Marketing,
      cartTitle: "Digital Marketing",
      cartText: ". . .",
    },
    {
      cartImg: Product,
      cartTitle: "Product Design",
      cartText: ". . .",
    },
    {
      cartImg: Service,
      cartTitle: "Digital Service",
      cartText: ". . .",
    },
    {
      cartImg: Analysis,
      cartTitle: "Digital Analysis",
      cartText: ". . .",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl mx-auto mt-20 space-y-20">
        <div>
          <Title title="WHAT WE DO" bigTitle="My Service Area" />
        </div>

        <div className="max-w-screen-xl mx-auto px-7 md:px-14 xl:px-0">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {list.map((item, index) => {
              return (
                <ServiceAreaCard
                  cartImg={item.cartImg}
                  cartTitle={item.cartTitle}
                  cartText={item.cartText}
                  titleStyle="text-xl"
                  textStyle="text-3xl"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
