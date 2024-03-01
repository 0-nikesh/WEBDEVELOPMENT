import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Info from "../components/Info";
import MainHero from "../components/MainHero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <MainHero />

      <Info />
      
      <Footer />
    </>
  );
}

export default Home;
