import React from "react";
import Header from "../components/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Description from "../components/Description";
import Equipements from "../components/Equipments";
import Logement from "../json/logement.json";
import Box from "../components/Box";
import Error from "./Error";

const Lodgment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = Logement.find((l) => l.id === id);

  if (!logement) {
    navigate("/Error");
    return <Error />;
  }

  return (
    <div>
      <Header />
      <div className="logement_class">
        <div className="lodgment" key={id}>
          <Carousel key={logement.pictures} Picture={logement.pictures} />
          <Box
            title={logement.title}
            location={logement.location}
            tags={logement.tags}
            name={logement.host.name}
            picture={logement.host.picture}
            rating={logement.rating}
          />
          <div className="logement_info">
            <Description
              key={logement.description}
              description={logement.description}
            />
            <Equipements
              key={logement.equipments}
              equipments={logement.equipments}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lodgment;
