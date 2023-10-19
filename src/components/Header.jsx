// import logo from "../assets/8214.cutjpg.jpg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import instegram from "../assets/instagram.png";
import tikTokBlack from "../assets/tik-tok-black.png";
import tikTokWhite from "../assets/tik-tok-white.png";
import facebook from "../assets/icons8-facebook-48.png";
import email from "../assets/gmail.png";
import twitter from '../assets/1690643591twitter-x-logo-png.png'
import logo from '../assets/pngegg.png'
import {
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiOutlineContacts,
  AiOutlineTeam,
  AiOutlineMedicineBox,
  AiFillAlert,
  AiFillEdit,
  AiFillIdcard,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const parm = useLocation();

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      if (window.scrollY >25) {
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
      path: "/SalesList",
      element: "sales",
    },
    {
      path: "/ContactUs",
      element: "Contact",
    },
    {
      path: "/picks",
      element: "steve's picks",
    },
    {
      path: "/testimonials",
      element: "testimonials",
    },
    {
      path: "/newsletter",
      element: "newsletter",
    },
  ];
  return (
    <nav
      className={`py-5 px-5 top-0 backdrop-blur-sm md:overflow-hidden  backdrop-filter  w-full ${
        parm.pathname === "/" ? "text-white" : "relative shadow-sm"
      } z-50 ${
        isSticky
          ? "bg-black/50 sticky text-white shadow-md"
          : "absolute backdrop-blur-sm backdrop-filter"
      }`}
    >
      <div
        onClick={closeMenu}
        className={`${
          menu ? "w-full " : "w-0 "
        } md:w-0 absolute   h-screen z-20 right-0 bg-black/50 top-0`}
      ></div>
      <div
        className={`fixed  z-50 w-2/3  p-4 ease-in duration-300 top-0 bg-white h-screen  scroll-smooth ${
          menu ? " left-0 " : "-left-full"
        } md:-left-full`}
      >
        <ul
          className={` ${
            menu ? "bottom-0" : "-bottom-full"
          }  absolute flex ease-in-out items-center duration-700   shadow-inner w-full left-0  p-4 justify-center mt-5 space-x-4`}
        >
          <a href="#">
            <img className="w-8" src={instegram} alt="" />
          </a>
          <a href="#">
            <img className="w-8" src={tikTokBlack} alt="" />
          </a>
          <a href="#">
            <img className="w-8" src={email} alt="" />
          </a>
          <a href="#">
            <img className="w-10" src={facebook} alt="" />
          </a>
          <a href="#">
            <img className="w-8" src={twitter} alt="" />
          </a>
        </ul>
        <div className="flex justify-between items-center shadow-sm  mb-6 py-1 ">
          <Link className="p-2" to="/">
            <div>
              <img src={logo} className="w-12 transform scale-[2]" alt="" />
            </div>
          </Link>
          <AiOutlineClose
            onClick={closeMenu}
            className={`text-xl text-white p-1 rounded-md w-7 h-7 bg-red-600 shadow   cursor-pointer md:hidden`}
          />
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-2  text-gray-500    `}
        >
          <NavLink
            onClick={closeMenu}
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiFillHome className="text-lg" />
            <Link to="/" className="font-semibold text-lg">
              Home
            </Link>
          </NavLink>

          <NavLink
            onClick={closeMenu}
            to="sale"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiOutlineShoppingCart className="text-lg" />
            <Link to="sales" className="font-semibold text-lg">
              Sale
            </Link>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/picks"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiOutlineMedicineBox className="text-lg" />
            <Link to="/picks" className="font-semibold text-lg">
              steve's picks
            </Link>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/Admin"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiFillIdcard className="text-lg" />
            <Link to="/Testimonials" className="font-semibold text-lg">
              Testimonials
            </Link>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/Newsletter"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiFillAlert className="text-lg" />
            <Link to="/Newsletter" className="font-semibold text-lg">
              Newsletter
            </Link>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/ContactUs"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiOutlineContacts className="text-lg" />
            <Link to="/ContactUs" className="font-semibold text-lg">
              Contact us
            </Link>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiOutlineTeam className="text-lg" />
            <Link to="/About" className="font-semibold text-lg">
              About us
            </Link>
          </NavLink>

          <NavLink
            onClick={closeMenu}
            to="/Admin"
            className={({ isActive }) =>
              isActive
                ? "font-bold md:text-lg text-md text-sky_blue flex gap-2 items-center hover:bg-sky_blue hover:text-white ease-linear duration-200  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow "
                : "flex gap-2 items-center hover:bg-sky_blue  cursor-pointer w-full px-4 py-2 rounded-md hover:shadow md:text-lg text-md hover:text-white  ease-in-out duration-300  font-semibold "
            }
          >
            <AiFillEdit className="text-lg" />
            <Link to="/Admin" className="font-semibold text-lg">
              Admin
            </Link>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-between  container items-center m-auto">
        <Link to="/">
          <img src={logo} className="w-12 transform scale-[2]" alt="" />
        </Link>
        <div className="hidden  md:flex gap-2 md:gap-5">
          {routers.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold md:text-md text-sm text-sky_blue capitalize "
                  : "md:text-md text-sm hover:text-sky_blue capitalize ease-in-out duration-300  font-semibold "
              }
              to={item.path}
              key={item.path}
            >
              {item.element}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-3 items-center justify-center">
          <a href="#">
            <img className="w-7" src={instegram} alt="" />
          </a>
          <a href="#">
            <img className="w-7" src={tikTokBlack} alt="" />
          </a>

          <div className={`flex  md:hidden`}>
            <AiOutlineMenu
              onClick={openlMenu}
              className={` text-4xl ease-in-out duration-300 rounded-full hover:text-white hover:bg-sky_blue  p-[6px] cursor-pointer md:hidden `}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
