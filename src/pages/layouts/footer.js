import React from "react";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto mt-20 px-5 sm:px-16">
      <div className="bg-blackimg bg-no-repeat bg-cover py-32 rounded-3xl max-xl:p-5">
        <div className="font-rob text-white flex max-md:flex-col max-w-screen-xl mx-auto md:space-x-10 max-md:space-y-16">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h4 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end">
                #CONTACT INFO
              </h4>
              <h1 className="font-pop text-5xl font-bold">Any Question?</h1>
              <p className="text-[#777] pr-10 lg:pr-32 xl:pr-52">
                Methods and techniques to taking raw data - mining for insights
                and years of experience.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4 2xl:mr-80 lg:mr-40 pb-7 mb-10 border-b border-slate-600">
                <div className="text-3xl text-main-purple">
                  <HiLocationMarker />
                </div>
                <div className="flex flex-col space-y-1">
                  <p>Ta-134/A, Gulshan Badda Link Rd,</p> <p>Nya 10982 USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 2xl:mr-80 lg:mr-40 pb-7 mb-10 border-b border-slate-600">
                <div className="text-3xl text-main-purple">
                  <FaEnvelope />
                </div>
                <div className="flex flex-col space-y-1">
                  <p>rasalinawillam@gmail.com</p> <p>info@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-main-purple">
                  <HiPhone />
                </div>
                <div className="flex flex-col space-y-1">
                  <p>+08 98787 8773 345</p> <p>+08 98787 8773 345</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div className="flex flex-col space-y-5">
              <h4 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-main-purple via-gradient-mid to-gradient-end">
                #GET IN TOUCH
              </h4>
              <h1 className="font-pop text-5xl font-bold">Let’s Say Hi</h1>
            </div>
            <form className="flex flex-col space-y-7">
              <input
                className="bg-transparent border-b border-slate-500 pb-3 outline-none"
                type="text"
                placeholder="Enter Name"
              />
              <input
                className="bg-transparent border-b border-slate-500 pb-3 outline-none"
                type="email"
                placeholder="Enter Email"
              />
              <textarea
                name="message"
                className="bg-transparent border-b border-slate-500 pb-32 outline-none resize-none"
                type="text"
                placeholder="Enter your Message"
              ></textarea>
              <div className="max-md:text-center">
                <button
                  id="footerBtn"
                  type="submit"
                  className="px-10 rounded-[500px] py-3 border text-white transition-all duration-300 ease-linear hover:border-main-purple font-bold font-pop border-none"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center my-6 dark:text-white">
        © 2022 Nerox - Agency & Portfolio Design . All Rights Reserved.
      </div>
    </div>
  );
}
