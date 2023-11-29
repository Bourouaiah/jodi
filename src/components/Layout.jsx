import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import MainRoutes from "../routes/MainRoutes";
import UseAuth from "../custom-hook/GetUser";
import AdminNav from "./admin/AdminNav";
import { useLocation } from "react-router-dom";

export default function Layout() {
  
    const parm = useLocation();
    console.log(parm.pathname.includes('Admin'))
   const { currentUser } = UseAuth();

  return (
    <>
      {currentUser &&
      (parm.pathname.includes("admin") ||
        parm.pathname.includes("AddSale") ||
        parm.pathname.includes("AddProducts") ||
        parm.pathname.includes("Emails") ||
        parm.pathname.includes("ProductList") ||
        parm.pathname.includes("AllVideos")) ? (
        <AdminNav />
      ) : (
        <Header />
      )}

      <MainRoutes />
      <Footer />
    </>
  );
}
