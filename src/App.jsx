import { BrowserRouter, useLocation } from "react-router-dom";
import "./index.css";
import React, { useEffect } from "react";
import { getProducts, getVideos } from "./redux/DbSlice";
import { useDispatch } from "react-redux";
import UsegetProductData from "./custom-hook/UsegetProductData";
import Layout from "./components/Layout";
function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { data, loader } = UsegetProductData("products");
  useEffect(() => {
    dispatch(getProducts({ data: data, loader: loader }));
  }, [data,loader, dispatch]);
 
 const { data:videos, loader:ld } = UsegetProductData("videos");
 useEffect(() => {
   dispatch(getVideos({ videos: videos, loader: ld }));
 }, [ videos, ld,dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Layout />;
}

export default App;
