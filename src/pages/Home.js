import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import backgroundImg2 from "../assets/images/background2.png";

const Home = () => {
  return (
    <div className="home_class">
      <img src={backgroundImg2} className="home_img" alt="limage d'un fond" />
      <p className="textground">Chez vous, partout et ailleurs</p>
      <Gallery />
    </div>
  );
};

export default Home;
