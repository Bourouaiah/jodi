import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { addProductsToFirestore, deleteItem } from "../../redux/DbSlice";
import UseAuth from "../../custom-hook/GetUser";
import Loader from "../Loader";

function ProdutList() {
 

  const dispatch = useDispatch();
  const { loader, products,videos } = useSelector((store) => store.db);
  const [data, setData] = useState({ loader: loader, products: products });
  useEffect(() => {
    setData({ loader: loader, products: products });
  }, [loader, products]);
  return (
    <>
      <div className="p-4">
        {!data.loader ? (
          <Loader/>
        ) : data.products.length === 0 ? (
          <h1 className="font-bold text-2xl text-center">no items</h1>
        ) : (
          <table className="container m-auto p-4 ">
            <thead className="shadow-gray-400 border-b-gray-300  border-b-[2px] p-8 ">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price </th>
                <th>brand</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody className="p-4 mb-3">
              {data.products.map((item, i) => {
                return (
                  <tr key={item.id} className="space-y-14">
                    <th>
                      <img
                        className="w-20 md:w-24  h-20 md:h-24 object-cover  rounded-full"
                        src={item.img}
                        alt=""
                      />
                    </th>
                    <th className="text-sm md:text:lg font-semibold">
                      {item.productName}
                    </th>
                    <th className="text-sm md:text:lg font-semibold">
                      <span className="mr-1">$</span>
                      {item.price}
                    </th>
                    <th className="text-sm md:text:lg font-semibold">
                      {item.brand}
                    </th>
                    <th className="text-red-600 text-xl cursor-pointer">
                      <AiFillDelete
                        onClick={() => {
                          dispatch(deleteItem(item.id));
                          dispatch(
                            addProductsToFirestore({
                              id: item.id,
                              colName: "products",
                              path: item.img,
                            })
                          );
                        }}
                      />
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default ProdutList;
