import React from "react";
import Header from "./pages/layouts/header";
import Footer from "./pages/layouts/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
