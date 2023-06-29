import React from "react";
import Rating from "./Rating";

function Box({ title, location, tags, name, picture, rating }) {
  return (
    <div className="box_parent">
      <div className="box">
        <div className="left_box">
          <h3 className="title_box">{title}</h3>
          <p className="location_box">{location}</p>
        </div>
        <div className="tags_box">
          {tags.map((tags) => (
            <div className="label_box">
              <label htmlFor="tag">{tags}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="right_box">
        <div className="name_box">
          <p>{name}</p>
          <img className="picture_box" src={picture} alt="Propriétaire" />
        </div>
        <Rating key={rating} score={rating} />
      </div>
    </div>
  );
}

export default Box;
