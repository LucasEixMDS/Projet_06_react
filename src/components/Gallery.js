import React from "react";
import logement from "../json/logement.json";
import Card from "../components/Card";

const Gallery = () => {
  return (
    <section className="Gallery">
      <ul>
        {logement.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
