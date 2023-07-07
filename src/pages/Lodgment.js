import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  const {
    pictures,
    title,
    location,
    tags,
    rating,
    description,
    equipments,
    host: {
      name,
      picture,
    }
  } = logement;
  return (
    <div className="logement_class">
      <div className="lodgment" key={id}>
        <Carousel Picture={pictures} />
        <Box
          title={title}
          location={location}
          tags={tags}
          name={name}
          picture={picture}
          rating={rating}
        />
        <div className="logement_info">
          <Description description={description} />
          <Equipements equipments={equipments} />
        </div>
      </div>
    </div>
  );
};

export default Lodgment;
