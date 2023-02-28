import React from "react";
import CardContent from "./CardContent";
import "./Card.scss";

import img1 from "../images/icon-team-builder.svg";
import img2 from "../images/icon-supervisor.svg";
import img3 from "../images/icon-karma.svg";
import img4 from "../images/icon-calculator.svg";

const Cards = () => {
  const content = [
    {
      name: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      img: img1,
    },
    {
      name: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
      img: img2,
    },
    {
      name: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      img: img3,
    },
    {
      name: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      img: img4,
    },
  ];

  return (
    <div className="card-container">
      {content.map((eachContent) => {
        return (
          <CardContent
            name={eachContent.name}
            text={eachContent.text}
            img={eachContent.img}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

export default Cards;
