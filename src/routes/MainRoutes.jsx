import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Home from '../components/Home'
import About from "../components/About";
import ContactForDeal from "../components/ContactForDeal";
import CartDetails from "../components/CartDetails"; 
import AllProdects from "../components/AllProdects";
import SaleDetails from "../components/SaleDetails";
import SalesList from "../components/salesList";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import Admin from "../components/Admin";
import ScrollToTop from "../components/ScroolTop";

export default function MainRoutes() {
  return (
    <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ContactForDeal" element={<ContactForDeal />} />
      <Route path="/About" element={<About />} />
      <Route path="/picks" element={<AllProdects />} />
      <Route path="/SalesList" element={<SalesList commmon={true} />} />
      <Route path="/Newsletter" element={<NewsLetter />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/saleDetails/:id" element={<SaleDetails />} />
    </Routes>
  );
}
