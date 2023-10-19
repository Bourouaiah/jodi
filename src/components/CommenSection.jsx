import React from 'react'
import common from '../assets/pexels-pixabay-259915.jpg'
export default function CommenSection({ title }) {
  return (
    <div className="relative h-44 bg-gradient-to-r z-20 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <h1 className="text-white z-50 text-4xl font-poppins font-bold absolute">
        {title}
      </h1>
      <div className="flex justify-center items-center w-full h-full bg-hero-pattern bg-no-repeat bg-center bg-cover">
        <img className="w-full h-44" src={common} alt="" />
      </div>
    </div>
  );
}
