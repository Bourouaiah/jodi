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
import AdminTestimonial from "../components/admin/AdminTestimonial";
import UseAuth from "../custom-hook/GetUser";
import AddProducts from "../components/admin/AddProducts";
import AddSale from '../components/admin/AddSale'
import { useState } from "react";
import { useEffect } from "react";
import ProductList from "../components/admin/ProductList";
import AllVideos from "../components/admin/AllVideos";
import Emails from "../components/admin/Emails";
export default function MainRoutes() {
  const { currentUser } = UseAuth();
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ContactForDeal/:id" element={<ContactForDeal />} />
      <Route path="/About" element={<About />} />
      <Route path="/picks" element={<AllProdects />} />
      <Route path="/SalesList" element={<SalesList commmon={true} />} />
      <Route path="/Newsletter" element={<NewsLetter />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      <Route path="/Admin" element={currentUser ? <AddSale /> : <Admin />} />
      <Route path="/AddSale" element={currentUser ? <AddSale /> : <Admin />} />

      <Route path="/saleDetails/:id" element={<SaleDetails />} />

      <Route
        path="DashBoard/TestimonialsAdmin"
        element={<AdminTestimonial />}
      />

      <Route path="/AddProducts" element={<AddProducts />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/AllVideos" element={<AllVideos />} />
      <Route path="/Emails" element={<Emails />} />
    </Routes>
  );
}
