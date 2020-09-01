import React from "react";

interface cardProps {
  name: string;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Card: React.FC<cardProps> = ({ name, handleClick }) => {
  return (
    <div
      className="memory-card"
      data-name={name}
      data-id="1"
      onClick={handleClick}
    >
      <img
        className="back"
        src={require("../../images/joel.jpg")}
        alt="Card Back"
      />
      <img
        className="front"
        src={require(`../../images/${name}.jpg`)}
        alt="Card Front"
      />
    </div>
  );
};

export default Card;
