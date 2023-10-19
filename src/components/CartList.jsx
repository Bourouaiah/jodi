import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
// import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import data from "../data/data"
import { Link } from 'react-router-dom';
export default function CartList() {
    const splideOptions = {
      perPage: 4,
      perMove: 1,
      type: "loop",
      rewind: true,
      keyboard: "global",
      gap: "1rem",
      pagination: false,
      padding: "2rem",
      breakpoints: {
        1200: { perPage: 3 },
        991: { perPage: 2.3 },
        768: { perPage: 2 },
        500: { perPage: 1.3 },
        425: { perPage: 1 },
      },
    };
  return (
    <div className="py-8">
      <h1 className='my-10 text-2xl text-sky_blue text-center font-extrabold capitalize'>the lastest products</h1>
      <Splide options={splideOptions}>
        {data.map((val, i) => (
          <SplideSlide key={i} className="mb-0.5 py-6 px-4">
           
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <div>
                <Link to={`/CartDetails/${val.id}`}>
                  <img
                    src={val.image}
                    alt="Product"
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                </Link>
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {val.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      <span className="text-gray-400 mr-3 uppercase text-xs">
                        start from
                      </span>{" "}
                      ${val.price}
                    </p>

                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
