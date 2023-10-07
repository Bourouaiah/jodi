import logo from "../assets/8214.cutjpg.jpg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const parm = useLocation();

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [menu, setmenu] = useState(false);
  const openlMenu = () => {
    setmenu(true);
  };
  const closeMenu = () => {
    setmenu(false);
  };
  const routers = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/ContactUs",
      element: "ContactUs",
    },
    {
      path: "/About",
      element: "About",
    },
    {
      path: "/AllProducts",
      element: "Products",
    },
  ];
  return (
    <nav
      className={`py-5 px-6  ease-linear duration-500  top-0  w-full ${
        parm.pathname === "/" ? "text-white " : "relative  shadow-sm "
      }  z-50 ${isSticky ? "bg-black/50 sticky text-white " : "absolute "}`}
    >
      <div
        className={`${
          menu ? "w-full " : "w-0 "
        } sm:w-0 absolute   h-screen z-20 right-0 bg-black/50 top-0`}
      ></div>

      <div
        className={`absolute z-50 w-2/3  p-4 ease-in duration-300  top-0 bg-white h-screen   ${
          menu ? " left-0 " : "-left-full"
        } sm:-left-full`}
      >
        <div className="flex justify-between items-center  mb-6 py-2 shadow-sm">
          <Link
            className="text-lg   font-bold font-leckerli-one text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl rounded-full shadow-md px-4 py-2"
            to="/"
          >
            S&J
          </Link>
          <AiOutlineClose
            onClick={closeMenu}
            className={`text-xl text-white p-1 rounded w-6 h-6 bg-red-600  cursor-pointer sm:hidden`}
          />
        </div>
        <div
          className={`   flex flex-col justify-center items-center gap-5  text-gray-500    `}
        >
          {routers.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold md:text-lg text-md  text-sky_blue  "
                  : "md:text-lg text-md  font-semibold "
              }
              to={item.path}
              key={item.path}
            >
              {item.element}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex justify-between container items-center m-auto">
        <div className="logo transform rotate-[-6deg] hover:rotate-[0deg] transition-transform duration-300 ease-in-out ">
          <Link
            className="text-lg   font-bold font-leckerli-one text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl rounded-full shadow-md px-4 py-2"
            to="/"
          >
            S&J
          </Link>
        </div>
        <div className="hidden  sm:flex gap-2">
          {routers.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold md:text-lg text-md  text-sky_blue  "
                  : "md:text-lg text-md  font-semibold "
              }
              to={item.path}
              key={item.path}
            >
              {item.element}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-2 items-center justify-center">
          <AiOutlinePlus className="text-2xl cursor-pointer" />
          <div className="relative">
            <span className="absolute bg-sky_blue flex items-center justify-center rounded-full text-xs w-4 h-4 text-slate-100 -right-[5px] shadow shadow-slate-300">
              0
            </span>
            <AiOutlineShopping className="text-2xl cursor-pointer" />
          </div>
          <AiOutlineMenu
            onClick={openlMenu}
            className={`text-xl cursor-pointer sm:hidden `}
          />
        </div>
      </div>
    </nav>
  );
}
