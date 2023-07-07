import backgroundImg from "../assets/images/background.png";
import Data from "../json/descript.json";
import Skill from "../components/Skill";
import React from 'react';

const About = () => {
  return (
    <div className="about_class">
      <img src={backgroundImg} className="about_img" alt="limage d'un fond" />
      <div className="flex-container">
        {Data.map((descript, index) => (
          <Skill
            key={index}
            title={descript.titleId}
            skill={descript.skillId}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
