import React, { useState } from "react";
import "./Cards.css";

function Cards() {
  const [classNames, setClassNames] = useState("");
  return (
    <div className="card-container">
      <div
        className={"memory-card" + classNames}
        onClick={() => setClassNames(" active")}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/daniel.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Back" />
      </div>
    </div>
  );
}

export default Cards;
