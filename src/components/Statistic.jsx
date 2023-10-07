import React, { useEffect, useState } from "react";
import deals from "../assets/deals.png";
import enterprise from "../assets/enterprise.png";
import customer from "../assets/satisfaction.png";
export default function Statistic() {
      const [scrollPosition, setScrollPosition] = useState(0);
      const [targetValues] = useState({
        companies: 114,
        offers: 97,
        co2Saved: 122,
      });
      const [currentValues, setCurrentValues] = useState({
        companies: 0,
        offers: 0,
        co2Saved: 0,
      });

      const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrollPosition(scrollY);
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      useEffect(() => {
        if (scrollPosition > 0) {
          const animationDuration = 1000; // 1 second
          const interval = animationDuration / 60; // Update 60 times per second
          const incrementStep =
            targetValues.companies / (animationDuration / interval);

          const intervalId = setInterval(() => {
            setCurrentValues((prevValues) => ({
              companies: Math.min(
                targetValues.companies,
                Math.ceil(prevValues.companies + incrementStep)
              ),
              offers: Math.min(
                targetValues.offers,
                Math.ceil(prevValues.offers + incrementStep)
              ),
              co2Saved: Math.min(
                targetValues.co2Saved,
                Math.ceil(prevValues.co2Saved + incrementStep)
              ),
            }));
          }, interval);

          return () => clearInterval(intervalId);
        }
      }, [scrollPosition, targetValues]);
  return (
    <section className="bg-[#f3f3f3] box-border p-4 overflow-hidden">
      <div className=" m-auto flex justify-evenly items-center flex-col relative sm:flex-row">
        <div className="absolute h-[400px] hidden sm:flex w-[2px] bg-gray-300 -top-8 right-1/3"></div>
        <div className="absolute h-[500px] hidden sm:flex  w-[2px] bg-gray-300  -top-8 right-2/3"></div>
        <div className="absolute w-[800px]  sm:hidden flex   h-[2px] bg-gray-300 -left-8 top-1/3"></div>
        <div className="absolute w-[800px] sm:hidden flex h-[2px] bg-gray-300 -left-8 top-2/3"></div>

        <div className="p-2 flex flex-1 justify-center items-center flex-col ">
          <img className="w-16 " src={customer} alt="" />
          <p className="my-3 text-lg font-semibold text-slate-700">
            +{currentValues.companies}
          </p>

          <h2 className="font-semibold text-lg text-slate-800">
            satistied client
          </h2>
        </div>
        <div className=" flex-1 p-2 flex justify-center items-center flex-col">
          <img className="w-16" src={deals} alt="" />
          <p className="my-3 text-lg font-semibold text-slate-700">
            + {currentValues.offers}
          </p>
          <h2 className="font-semibold text-lg text-slate-800"> Offers</h2>
        </div>
        <div className="p-2 flex-1 flex justify-center items-center flex-col">
          <img className="w-16" src={enterprise} alt="" />
          <p className="my-3 text-lg font-semibold text-slate-700">
            + {currentValues.co2Saved}
          </p>

          <h2 className="font-semibold text-lg text-slate-800"> Customer</h2>
        </div>
      </div>
    </section>
  );
}
