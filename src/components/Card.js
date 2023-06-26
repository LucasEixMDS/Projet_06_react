import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <li className="gallery_article">
      <Link to={"/Lodgment/" + logement.id}>
        <img src={logement.cover} alt="logement" />
        <div className="gallery_article_article"></div>
        <p className="gallery_article_title">{logement.title}</p>
      </Link>
    </li>
  );
};

export default Card;
