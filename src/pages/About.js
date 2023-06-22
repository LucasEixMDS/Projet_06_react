import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImg from "../assets/images/background.png";
import { UpOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about_class">
        <img src={backgroundImg} className="about_img" alt="limage d'un fond" />
        <div class="flex-container">
          <div class="flex-items">
            <p>Flabilité</p>
            <UpOutlined className="upIcon" />
          </div>
          <div class="flex-items">
            <p>Respect</p>
            <UpOutlined className="upIcon" />
          </div>
          <div class="flex-items">
            <p>Service</p>
            <UpOutlined className="upIcon" />
          </div>
          <div class="flex-items">
            <p>Sécurité</p>
            <UpOutlined className="upIcon" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
