import { useEffect, useState } from "react";

export default function Counter() {
  const [dateCounter, setDateCounter] = useState({
    days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });
  let interval;
  const calculateDate = () => {
    const destination = new Date("7 Dec,2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const deffrent = destination - now;
      const days = Math.floor(deffrent / (1000 * 60 * 60 * 24));
      const Hours = Math.floor(
        (deffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((deffrent % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((deffrent % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDateCounter({
          days: days,
          Hours: Hours,
          Minutes: minute,
          Seconds: Seconds,
        });
      }
    });
  };
  useEffect(() => {
    calculateDate();
  }, []);
  return (
    <div className=" bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-100 px-8 py-4 flex flex-col gap-4 ">
      <h1 className="px-3 text-gray-300">House 01 / Jenison Wonnderland</h1>
      {/* <h2 className="w-full text-center font-bold text-gray-300 text-2xl">
        to be determined
      </h2> */}
      <div className="flex  items-center justify-center gap-6">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col items-center justify-end">
            <h1 className="font-bold text-3xl shadow-slate-600 ">
              {dateCounter.days}
            </h1>
            <p className=" ">Days</p>
          </div>
          <span className="font-bold text-3xl ">:</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-center justify-end">
            <h1 className="font-bold text-3xl shadow-slate-600 ">
              {" "}
              {dateCounter.Hours}
            </h1>
            <p className=" ">Hours</p>
          </div>
          <span className="font-bold text-3xl ">:</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-center justify-end">
            <h1 className="font-bold text-3xl shadow-slate-600 ">
              {" "}
              {dateCounter.Minutes}
            </h1>
            <p className="">Minutes</p>
          </div>
          <span className="font-bold text-3xl ">:</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-center justify-end">
            <h1 className="font-bold text-3xl shadow-slate-600 ">
              {" "}
              {dateCounter.Seconds}
            </h1>
            <p className=" ">Seconds</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-3 ">
        <p className="text-xs sm:text-sm  text-gray-100">
          For Sale details and location visit the link bellow
        </p>
        <button className="flex items-center w-fit gap-2 justify-center  h-12 px-6 tracking-wide text-slate-400 font-bold transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-white hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
          {/* <AiFillAlert className="text-2xl mb-1" /> */}
          Estatesales.net
        </button>
      </div>
    </div>
  );
}
