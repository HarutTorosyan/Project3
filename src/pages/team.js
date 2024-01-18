import React from "react";
import Title from "./components/title";
import TeamCard from "./components/teamCard";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import MainBtn from "./components/mainBtn";

export default function Team() {
  const list = [
    {
      title: "Rasalina Willamson",
      prof: "SR. WEB DEVELOPER",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaInstagram />,
      social4: <FaBehance />,
      social5: <FaDribbble />,
      cartStyle: "bg-author1",
    },
    {
      title: "Rasalina Willamson",
      prof: "SR. WEB DEVELOPER",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaInstagram />,
      social4: <FaBehance />,
      social5: <FaDribbble />,
      cartStyle: "bg-author2",
    },
    {
      title: "Rasalina Willamson",
      prof: "SR. WEB DEVELOPER",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaInstagram />,
      social4: <FaBehance />,
      social5: <FaDribbble />,
      cartStyle: "bg-author3",
    },
    {
      title: "Rasalina Willamson",
      prof: "SR. WEB DEVELOPER",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaInstagram />,
      social4: <FaBehance />,
      social5: <FaDribbble />,
      cartStyle: "bg-author4",
    },
    {
      title: "Rasalina Willamson",
      prof: "SR. WEB DEVELOPER",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaInstagram />,
      social4: <FaBehance />,
      social5: <FaDribbble />,
      cartStyle: "bg-author5",
    },
    {
      title: "Rasalina Willamson",
      prof: "SR. WEB DEVELOPER",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaInstagram />,
      social4: <FaBehance />,
      social5: <FaDribbble />,
      cartStyle: "bg-author6",
    },
  ];

  return (
    <div className="my-24 max-w-screen-2xl mx-auto space-y-16">
      <div>
        <Title title="MEET OUR TEAM" bigTitle="Our Pro Team" />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-7 sm:px-14 md:px-20 xl:px-0">
          {list.map((item, index) => {
            return (
              <TeamCard
                title={item.title}
                prof={item.prof}
                social1={item.social1}
                social2={item.social2}
                social3={item.social3}
                social4={item.social4}
                social5={item.social5}
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
