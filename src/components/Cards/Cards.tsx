import React, { useState } from "react";
import "./Cards.css";

function Cards() {
  const [classNames, setClassNames] = useState("");
  return (
    <div className="card-container">
      <div
        className={"memory-card" + classNames}
        onClick={() => setClassNames(" flip")}
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
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/david.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/david.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/edgar.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/edgar.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ian.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ian.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/linnea.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/linnea.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ray.jpg")}
          alt="Card Front"
        />
      </div>
      <div className="memory-card">
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ray.jpg")}
          alt="Card Front"
        />
      </div>
    </div>
  );
}

export default Cards;
