import React, { useState } from "react";
import LogoDark from "../../assets/img/Link-logo.png.png";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FaPlus, FaTimes, FaSearch, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import PagesUl from "../components/pagesUl";
import ThemeSwitch from "../components/themeSwitch";
import Project1 from "../../assets/img/div.tpproject-1-thumbnail.jpg";
import Project2 from "../../assets/img/div.tpproject-2-thumbnail.jpg";
import Project3 from "../../assets/img/div.tpproject-3-thumbnail.jpg";
import Project4 from "../../assets/img/div.tpproject-4-thumbnail.jpg";
import Project5 from "../../assets/img/div.tpproject-5-thumbnail.jpg";
import Project6 from "../../assets/img/div.tpproject-6-thumbnail.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const list = [
    {
      listTitle: "Prayer Layout 1",
      li1: "About",
      li2: "About Me",
      li3: "Contact",
      li4: "FAQ",
      li5: "Help Center",
      li6: "Error 404",
      li7: "Pricing Plan",
      li8: "Privacy Policy",
      li9: "Coming Soon",
    },
  ];

  const list2 = [
    {
      listTitle: "Prayer Layout 2",
      li1: "Portfolio",
      li2: "Portfolio 2",
      li3: "Portfolio 3",
      li4: "Portfolio 4",
      li5: "Portfolio 5",
      li6: "Portfolio 6",
      li7: "Portfolio Details",
      li8: "Job List",
      li9: "Job Details",
    },
  ];

  const list3 = [
    {
      listTitle: "Prayer Layout 3",
      li1: "Services",
      li2: "Services 2",
      li3: "Services 3",
      li4: "Services 4",
      li5: "Services Details",
      li6: "Team",
      li7: "Team 2",
      li8: "Team Details",
    },
  ];

  const list4 = [
    {
      listTitle: "Prayer Layout 4",
      li1: "Shop",
      li2: "Product Details",
      li3: "Cart",
      li4: "Wishlist",
      li5: "Chek List",
      li6: "Login",
      li7: "Register",
    },
  ];

  return (
    <>
      <div className="w-full px-5 2xl:px-0 py-5 lg:py-0 bg-white dark:bg-black z-50 shadow-xl">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div>
            <Link to={""}>
              <img src={LogoDark} alt="" />
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex dark:text-white items-center lg:space-x-5 xl:space-x-10 font-rob font-bold">
              <li
                id="home"
                className="py-10 flex items-center group relative hover:text-main-purple transition-all duration-300 ease-linear"
              >
                HOME{" "}
                <span className="ml-1 group-hover:rotate-45 origin-center group-hover:text-main-purple transition-all duration-200 ease-linear text-xs">
                  <FaPlus />
                </span>
                <ul
                  id="home_ul"
                  className="flex flex-col z-50 bg-white dark:bg-black absolute top-full text-slate-500 w-52 text-sm font-semibold origin-top transition-all duration-300 ease-linear"
                >
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Designer</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Agency</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Freelancer</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Corporate</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Studio</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Creative</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Minimal</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Minimal Full</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Photographer</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Photographer 2</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Photographer 3</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Photographer 4</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Home Politician</li>
                  </Link>
                </ul>
              </li>
              <li className="py-10 hover:text-main-purple transition-all duration-300 ease-linear">
                ABOUT{" "}
              </li>
              <li
                id="pages"
                className="py-10 flex items-center group relative hover:text-main-purple transition-all duration-300 ease-linear"
              >
                PAGES{" "}
                <span className="ml-1 group-hover:rotate-45 origin-center group-hover:text-main-purple transition-all duration-200 ease-linear text-xs">
                  <FaPlus />
                </span>
                <ul
                  id="pages_ul"
                  className="absolute flex z-50 px-4 space-x-3 py-5 font-rob bg-white dark:bg-black top-full w-[1500px] -left-[600px] text-slate-500 text-sm font-semibold origin-top transition-all duration-300 ease-linear shadow-lg shadow-gray-700"
                >
                  <li className="w-1/4">
                    {list.map((item, index) => {
                      return (
                        <PagesUl
                          listTitle={item.listTitle}
                          li1={item.li1}
                          li2={item.li2}
                          li3={item.li3}
                          li4={item.li4}
                          li5={item.li5}
                          li6={item.li6}
                          li7={item.li7}
                          li8={item.li8}
                          li9={item.li9}
                        />
                      );
                    })}
                  </li>
                  <li className="w-1/4">
                    {list2.map((item, index) => {
                      return (
                        <PagesUl
                          listTitle={item.listTitle}
                          li1={item.li1}
                          li2={item.li2}
                          li3={item.li3}
                          li4={item.li4}
                          li5={item.li5}
                          li6={item.li6}
                          li7={item.li7}
                          li8={item.li8}
                          li9={item.li9}
                        />
                      );
                    })}
                  </li>
                  <li className="w-1/4">
                    {list3.map((item, index) => {
                      return (
                        <PagesUl
                          listTitle={item.listTitle}
                          li1={item.li1}
                          li2={item.li2}
                          li3={item.li3}
                          li4={item.li4}
                          li5={item.li5}
                          li6={item.li6}
                          li7={item.li7}
                          li8={item.li8}
                          li9={item.li9}
                        />
                      );
                    })}
                  </li>
                  <li className="w-1/4">
                    {list4.map((item, index) => {
                      return (
                        <PagesUl
                          listTitle={item.listTitle}
                          li1={item.li1}
                          li2={item.li2}
                          li3={item.li3}
                          li4={item.li4}
                          li5={item.li5}
                          li6={item.li6}
                          li7={item.li7}
                          li8={item.li8}
                          li9={item.li9}
                        />
                      );
                    })}
                  </li>
                </ul>
              </li>
              <li
                id="service"
                className="py-10 flex items-center group relative hover:text-main-purple transition-all duration-300 ease-linear"
              >
                SERVICES{" "}
                <span className="ml-1 group-hover:rotate-45 origin-center group-hover:text-main-purple transition-all duration-200 ease-linear text-xs">
                  <FaPlus />
                </span>
                <ul
                  id="service_ul"
                  className="flex flex-col z-50 bg-white dark:bg-black absolute top-full text-slate-500 w-52 text-sm font-semibold origin-top transition-all duration-300 ease-linear"
                >
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Services Page</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Services Details</li>
                  </Link>
                </ul>
              </li>
              <li
                id="blog"
                className="py-10 flex items-center group relative hover:text-main-purple transition-all duration-300 ease-linear"
              >
                BLOG{" "}
                <span className="ml-1 group-hover:rotate-45 origin-center group-hover:text-main-purple transition-all duration-200 ease-linear text-xs">
                  <FaPlus />
                </span>
                <ul
                  id="blog_ul"
                  className="flex z-50 flex-col bg-white dark:bg-black absolute top-full text-slate-500 w-52 text-sm font-semibold origin-top transition-all duration-300 ease-linear"
                >
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Blog Page</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Blog Grid</li>
                  </Link>
                  <Link className="hover:text-main-purple transition-all duration-200 ease-linear hover:bg-slate-100 p-2">
                    <li>Blog Details</li>
                  </Link>
                </ul>
              </li>
              <li className="py-10 hover:text-main-purple transition-all duration-300 ease-linear">
                CONTACTS{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-5">
              <li className=" hidden sm:block p-5 border group border-slate-200 rounded-full hover:bg-main-purple transition-all duration-300 ease-linear">
                <span className="group-hover:text-white dark:text-white dark:group-hover:text-black transition-all duration-300 ease-linear delay-100">
                  <AiOutlineSearch />
                </span>
              </li>
              <li
                className="p-5 border group border-slate-200 rounded-full hover:bg-main-purple transition-all duration-300 ease-linear cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <span className="group-hover:text-white dark:text-white dark:group-hover:text-black transition-all duration-300 ease-linear delay-100 ">
                  <AiOutlineMenu />
                </span>
              </li>
              <li className="border group border-slate-200 rounded-full hover:bg-gradient-to-tr from-main-purple from-20% via-gradient-mid via-80% to-gradient-end to-100% transition-all duration-300 ease-linear">
                <span className="group-hover:text-white dark:text-white dark:group-hover:text-black transition-all duration-75">
                  <ThemeSwitch />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          open
            ? "fixed right-0 py-14 top-0 z-50 bg-white h-full w-80 sm:w-[450px] shadow-2xl shadow-black overflow-auto"
            : "fixed right-0 py-14 top-0 z-50 w-0 bg-white h-full"
        }
      >
        <div className="flex flex-col px-10 space-y-10">
          <div className="flex justify-between items-center border-b pb-5">
            <img src={LogoDark} alt="" />
            <div
              className="p-5 rounded-full bg-main-purple text-white cursor-pointer"
              onClick={toggleOpen}
            >
              <FaTimes />
            </div>
          </div>
          <form className="relative">
            <input
              type="text"
              placeholder="What are you searching for?"
              className="w-full outline-none border-b pb-2 focus:border-main-purple bg-transparent"
            />
            <button
              type="submit"
              className="absolute top-[50%] right-0 -translate-y-[50%] hover:text-main-purple"
            >
              <FaSearch />
            </button>
          </form>
          <p className="text-[#777] max-lg:hidden">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and will give you a complete
            account of the system and expound the actual teachings of the great
            explore
          </p>
          <div className="grid grid-cols-3 gap-2 max-lg:hidden">
            <img src={Project1} className="h-20 w-full" alt="" />
            <img src={Project2} className="h-20 w-full" alt="" />
            <img src={Project3} className="h-20 w-full" alt="" />
            <img src={Project4} className="h-20 w-full" alt="" />
            <img src={Project5} className="h-20 w-full" alt="" />
            <img src={Project6} className="h-20 w-full" alt="" />
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"
              title="Map"
              frameborder="0"
              className="w-full h-[200px] max-lg:hidden"
            ></iframe>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold font-pop text-2xl">Contact Info</h1>
            <div className="group">
              <a href="/" className="flex items-center ">
                <CiLocationOn className="border p-2 text-4xl rounded-lg group-hover:text-white group-hover:bg-main-purple" />{" "}
                <p className="ml-2 group-hover:text-main-purple">
                  12/A, Mirnada City Tower, NYC
                </p>
              </a>
            </div>
            <div className="group">
              <a href="/" className="flex items-center ">
                <CiLocationOn className="border p-2 text-4xl rounded-lg group-hover:text-white group-hover:bg-main-purple" />{" "}
                <p className="ml-2 group-hover:text-main-purple">
                  12/A, Mirnada City Tower, NYC
                </p>
              </a>
            </div>
            <div className="group">
              <a href="/" className="flex items-center ">
                <CiLocationOn className="border p-2 text-4xl rounded-lg group-hover:text-white group-hover:bg-main-purple" />{" "}
                <p className="ml-2 group-hover:text-main-purple">
                  12/A, Mirnada City Tower, NYC
                </p>
              </a>
            </div>

            <div className="flex items-center text-main-purple space-x-3">
              <div>
                <a href="/">
                  <FaFacebookF className="p-3 text-4xl bg-slate-200 rounded-md" />
                </a>
              </div>
              <div>
                <a href="/">
                  <FaTwitter className="p-3 text-4xl bg-slate-200 rounded-md" />
                </a>
              </div>
              <div>
                <a href="/">
                  <FaYoutube className="p-3 text-4xl bg-slate-200 rounded-md" />
                </a>
              </div>
              <div>
                <a href="/">
                  <FaLinkedin className="p-3 text-4xl bg-slate-200 rounded-md" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
