import { BsFillBagCheckFill } from "react-icons/bs";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/Seth&SonsLogo.svg";
import instegram from "../assets/instagram.png";
import tikTokBlack from "../assets/tik-tok-black.png";
import tikTokWhite from "../assets/tik-tok-white.png";
import facebook from "../assets/icons8-facebook-48.png";
import email from "../assets/gmail.png";
import twitter from "../assets/1690643591twitter-x-logo-png.png";
import UseAuth from "../custom-hook/GetUser";
import { useState } from "react";
import { useEffect } from "react";

export default function Footer() {
  return (
    <footer className="p-8  bg-black text-gray-400 ">
      <div className="container grid gap-4 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex  gap-1 items-center  ">
            <Link
              to="/"
              className="font-bold text-xl text-slate-600 font-poppins"
            >
              <img
                src={logo}
                className="font-normal w-16 text-lg text-gray-500"
              />
            </Link>
          </div>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elie.
          </p>
          <ul
            className={` 
      
          flex ease-in-out items-center   p-1 justify-center mt-2 space-x-3`}
          >
            <a target="_blank" href="instegram/sethandsonsestate">
              <img className="w-6" src={instegram} alt="" />
            </a>
            <a target="_blank" href="sethandsonsestate">
              <img className="w-6" src={tikTokBlack} alt="" />
            </a>
            <a target="_blank" href="#sethandsonsestate">
              <img className="w-6" src={email} alt="" />
            </a>
            <a target="_blank" href="#sethandsonsestate">
              <img className="w-8" src={facebook} alt="" />
            </a>
            <a target="_blank" href="#sethandsonsestate">
              <img className="w-6" src={twitter} alt="" />
            </a>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl text-slate-200 mb-3">
            usefull links
          </h2>
          <ul className="flex flex-col  justify-start gap-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/SalesList">Sales</Link>
            </li>
            <li>
              <Link to="/About">Services</Link>
            </li>
            <li>
              <Link to="/admin">admin</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl text-slate-200 mb-3">
            usefull links
          </h2>
          <ul className="flex flex-col  justify-start gap-1">
            <Link to="/picks">staff's Picks</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/ContactUs">Contact</Link>
            <Link to="/newsletter">Subscribe</Link>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl text-slate-200 mb-3">contact</h2>
          <ul className="flex flex-col   gap-3">
            <li className=" flex gap-1 items-center ">
              <BiLocationPlus />
              setif, Algeria
            </li>
            <li className=" flex gap-1 items-center ">
              {" "}
              <AiFillPhone />
              (616) 644-8303
            </li>
            <li className=" flex gap-1 items-center ">
              {" "}
              <AiOutlineMail />
              sethandsonsestate@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
