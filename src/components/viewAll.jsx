import React from 'react'
import { Link } from 'react-router-dom';

export default function ViewAll() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-center p-4">
      <h1 className="my-10 text-2xl text-white text-center font-extrabold capitalize">
        VISIT OUR STORE
      </h1>
      <Link
      to='/AllProducts'
        type="button"
        className="text-gray-400 bg-gradient-to-r from-white to-gray-300 hover:bg-gradient-to-bl font-semibold focus:scale-110 ease-linear duration-200 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-lg px-9 py-2.5 text-center mr-2 mb-2"
      >
        view all product
      </Link>
    </section>
  );
}
