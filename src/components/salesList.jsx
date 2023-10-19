import React from "react";
import { Link } from "react-router-dom";
import PRODUCTS from "../data";
import CommenSection from "./CommenSection";

export default function SalesList({commmon}) {
  // console.log(newData)
  return (
    <section>
        {commmon?<CommenSection title="All Sales" />:null}
      <div  className=" p-4">
        <h1 className="my-10 text-2xl text-slate-900 text-center font-extrabold capitalize">
          Sales
        </h1>

        <div className="container flex justify-between sm:flex-row flex-col items-center gap-4 m-auto ">
          {PRODUCTS.map((item, i) => (
            <Link
              key={i}
              to={`/saleDetails/${item.id}`}
              className="bg-blue-300 w-full text-xl flex justify-center items-center font-semibold text-center  h-40 rounded text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
