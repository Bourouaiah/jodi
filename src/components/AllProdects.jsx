
import CommenSection from "./CommenSection";
import { useSelector } from "react-redux";
import Loader from "./Loader";

export default function AllProducts() {
  const { products, loader } = useSelector((store) => store.db);
  return (
    <section>
      <CommenSection title="All products" />
      {!loader ? (
        <Loader />
      ) : (
        <div className="w-fit container m-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10 mb-5">
          {products.map((val, i) => (
            <div key={i} className="mb-2 py-2 px-2 ">
              <div className="bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <div>
                  <div>
                    <img
                      src={val.img}
                      alt="Product"
                      className="h-48 w-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <span className="text-gray-400 mr-2 uppercase text-xs">
                      Brand
                    </span>
                    <p className="text-sm font-bold text-black truncate capitalize">
                      {val.productName}
                    </p>
                    <div className="flex items-center">
                      <p className="text-sm font-semibold text-black cursor-auto my-1">
                        <span className="text-gray-400 mr-2 uppercase text-xs">
                          Start from
                        </span>{" "}
                        ${val.price}
                      </p>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
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
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
