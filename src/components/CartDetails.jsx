import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/data";
import { AiOutlineShopping } from "react-icons/ai";
export default function CartDetails() {
  const parm = useParams();
  const product = data.find((item) => item.id == parm.id);
  return (
    <section className="py-20 overflow-hidden bg-white font-poppins ">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2">
            <div className="sticky top-0 z-20 overflow-hidden">
              <div className="relative mb-6 lg:mb-10 h-96">
                <img
                  src={product.image}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-wrap hidden md:flex">
                {/* Repeat this block for each product image */}
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    className="block border border-blue-100   hover:border-blue-300"
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="object-cover w-full lg:h-32"
                    />
                  </a>
                </div>
                {/* End of block */}
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:pl-20">
            <div className="pb-6 mb-8 border-b border-gray-200 ">
              <h2 className="max-w-xl mt-2 mb-6 text-xl  font-bold text-slate-900 md:text-4xl">
                {product.title}
              </h2>
              <div className="flex flex-wrap items-center mb-6"></div>
              <p className="max-w-md mb-8 text-gray-700 ">
                {product.description}
              </p>

              <p className="inline-block text-2xl font-semibold text-gray-700  ">
                <span>
                  {" "}
                  start from <span className="font-bold">${product.price}</span>
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center ">
              <div className="mb-4 mr-4 lg:mb-0">
                <div className="w-28">
                  <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer   hover:text-gray-700  hover:bg-gray-300">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>

                    <span
                      className="flex items-center justify-center w-full font-semibold
                    text-center text-gray-700 placeholder-gray-700 bg-gray-100
                    outline-none focus:outline-none text-md hover:text-black"
                    >
                      1
                    </span>
                    <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer   hover:text-gray-700 hover:bg-gray-300">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4 mr-4 lg:mb-0">
                <Link
                  to="/ContactForDeal"
                  className="w-full h-10 p-2 mr-4 bg-blue-500  text-gray-50 hover:bg-blue-600 "
                >
                  Buy Now
                </Link>
              </div>
              <div className="mb-4 mr-4 lg:mb-0">
                <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50   hover:bg-blue-600 hover:border-blue-600   ">
                  <AiOutlineShopping className="w-16" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
