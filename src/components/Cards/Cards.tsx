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
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
      <div className="memory-card">
        <img src={require("../../images/joel.jpg")} alt="Card Background" />
      </div>
    </div>
  );
}

export default Cards;
