import React, { useState } from "react";
import "./Cards.css";

type ClassNamesState = {
  cardId: string;
  name: string;
};

function Cards() {
  const [classNames, setClassNames] = useState<ClassNamesState[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    event.currentTarget.classList.add("flip");
    // const cardObject: ClassNamesState = {
    //   cardId: id,
    //   name: " .flip",
    // };
    // setClassNames((prevState) => [...prevState, cardObject]);
    // console.log(classNames);
  };

  return (
    <div className="card-container">
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
      <div className="memory-card" onClick={handleClick}>
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
