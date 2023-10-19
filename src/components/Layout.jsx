import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import MainRoutes from "../routes/MainRoutes";

export default function Layout() {
  return (
    <>
     
      <Header />
    
      <MainRoutes />
      <Footer />

     
    </>
  );
}
