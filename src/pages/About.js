import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImg from "../assets/images/background.png";
import Data from "../json/descript.json";
import Items from "../components/Items";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about_class">
        <img src={backgroundImg} className="about_img" alt="limage d'un fond" />
        <div className="flex-container">
          {Data.map((descript, index) => (
            <Items
              key={index}
              title={descript.titleId}
              skill={descript.skillId}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
