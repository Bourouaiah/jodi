import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsegetProductData from "../../custom-hook/UsegetProductData";
import { getVideos } from "../../redux/DbSlice";
import { addProductsToFirestore, deleteItem } from "../../redux/DbSlice";
import { AiFillDelete } from "react-icons/ai";
import Loader from "../Loader";

export default function AllVideos() {
    const dispatch = useDispatch();

     const { loader, products, videos } = useSelector((store) => store.db);
     const [data, setData] = useState({ loader: loader, products: products });
     useEffect(() => {
       setData({ loader: loader, products: videos });
     }, [loader, videos]);
     console.log(videos);
  return (
    <div className="p-8  ">
      {!data.loader ? (
       <Loader/> 
      ) : data.products.length === 0 ? (
        <h1 className="font-bold text-2xl text-center">no items</h1>
      ) : (
        <table className="container m-auto    ">
          <thead className="shadow-gray-400 border-b-gray-300  border-b-[2px] p-8 ">
            <tr>
              <th>Sale number </th>
              
              <th> sale location </th>
              <th>number of videos </th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="p-4 mb-3 ">
            {data.products.map((item, i) => {
              return (
                <tr key={item.id} className="space-14">
                  <th>
                    <p>{i + 1}</p>
                  </th>
                 
                  <th className="text-sm md:text:lg font-semibold">
                    
                   {item.saleLocation}
                  </th>
                  <th className="text-sm md:text:lg font-semibold">
                    {item.videos?.length}
                  </th>
                  <th className="text-red-600 text-xl cursor-pointer">
                    <AiFillDelete
                      onClick={() => {
                        dispatch(deleteItem(item.id));
                        dispatch(
                          addProductsToFirestore({
                            id: item.id,
                            colName: "videos",
                            path:item.videos
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
  );
}
