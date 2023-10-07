import { Link } from "react-router-dom";
import React from "react";
import localVideo from "../assets/yt5s.com-Web Design Company video background.mp4";
import Statistic from "./Statistic";
import CartList from "./CartList";
import ViewAll from "../components/viewAll";
import Features from "./Features";
import NewsLetter from "./NewsLetter";

export default function Home() {
  return (
    <>
      <div className="  ease-linear duration-500 relative h-screen flex items-start sm:justify-center  ">
        <div className="absolute  w-full h-screen z-20 bg-black/20  backdrop-blur-sm backdrop-filter  bg-opacity-20"></div>
        <video
          src={localVideo}
          autoPlay
          loop
          muted
          className="absolute z-10 
           w-full  h-screen max-w-none object-cover"
        ></video>
        <div className="text-white z-20 relative  container m-auto md:px-12 py-16 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl lg:w-2/3  text-center  md:text-5xl  text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-sky_blue mb-5 font-extrabold">
            Seth and SonsPremier Estate Sales
          </h1>
          <p className="text-lg  text-transparent  bg-clip-text bg-gradient-to-r from-gray-200 to-white font-medium  text-md text-center mb-8 px-12">
            Explore estates of departed individuals, each offering a curated
            collection of items.
          </p>
          <div>
            <Link
              id="Subscribe"
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:scale-110 ease-linear duration-200 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-lg text-lg px-9 py-2.5 text-center mr-2 mb-2"
            >
              Subscribe
            </Link>
            <Link
              to="/ContactUs"
              type="button"
              className="text-sky_blue bg-gradient-to-r from-white to-gray-300 hover:bg-gradient-to-bl font-semibold focus:scale-110 ease-linear duration-200 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-lg px-9 py-2.5 text-center mr-2 mb-2"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <NewsLetter />
      <CartList />
      <ViewAll />
      <Features />

      {/* <section className="h-screen w-full"></section> */}
    </>
  );
}
