import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Home from '../components/Home'
import About from "../components/About";
import ContactForDeal from "../components/ContactForDeal";
import CartDetails from "../components/CartDetails"; 
import AllProdects from "../components/AllProdects";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ContactForDeal" element={<ContactForDeal />} />
      <Route path="/About" element={<About />} />
      <Route path="/AllProducts" element={<AllProdects />} />
      <Route path="/CartDetails/:id" element={<CartDetails />} />
    </Routes>
  );
}
