import React from "react";
import "./CardContent.scss";

const CardContent = (props) => {
  return (
    <div className="card">
      <h2 className="card-heading">{props.name}</h2>
      <p className="card-text">{props.text}</p>
      <img src={props.img} alt="logos" className="card-img" />
    </div>
  );
};

export default CardContent;
