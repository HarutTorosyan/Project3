import React from "react";
import Title from "./components/title";
import BolgCard from "./components/bolgCard";
import MainBtn from "./components/mainBtn"

export default function Blog() {
  const list = [
    {
      title: "BUSINESS...",
      title2: "23 January 2022",
      subTitle: "What is the Main Challage for a Design Agency.",
      cartStyle: "bg-blog1",
    },
    {
      title: "BUSINESS...",
      title2: "23 January 2022",
      subTitle: "What is the Main Challage for a Design Agency.",
      cartStyle: "bg-blog2",
    },
    {
      title: "BUSINESS...",
      title2: "23 January 2022",
      subTitle: "What is the Main Challage for a Design Agency.",
      cartStyle: "bg-blog3",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto my-28 space-y-20">
      <div>
        <Title title="BLOG & ARTICLE" bigTitle="Read Our Blog & Article" />
      </div>
      <div className="max-w-screen-xl mx-auto px-5 sm:px-20 md:px-10 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {list.map((item, index) => {
            return (
              <BolgCard
                title={item.title}
                title2={item.title2}
                subTitle={item.subTitle}
                cartStyle={item.cartStyle}
              />
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <a href="/">
          <MainBtn
            btnText="VIEW ALL ARTICLE"
            btnStyle="bg-main-purple hover:bg-transparent hover:text-main-purple"
          />
        </a>
      </div>
    </div>
  );
}
