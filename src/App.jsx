import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import React, { useEffect } from "react";
import Layout from "./components/Layout";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("w")
  }, [pathname]);
  return <Layout />;
}

export default App;
