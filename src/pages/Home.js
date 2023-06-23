import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImg2 from "../assets/images/background2.png";

const Home = () => {
  return (
    <div className="home_class">
      <Header />
      <img src={backgroundImg2} className="home_img" alt="limage d'un fond" />
      <p className="textground">Chez vous, partout et ailleurs</p>

      <div className="container_parent">
        <div className="container_enfant"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
