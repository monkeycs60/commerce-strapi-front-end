import { SalesCardStyle } from "@/styles/SalesCardStyle";
import { useState } from "react";

const SalesCard = ({ title, description, source, longtext }) => {
  const [flipped, isFlipped] = useState(false);

  const handleClick = () => {
    isFlipped(!flipped);
  };

  return (
    <SalesCardStyle className={flipped ? "flipped" : ""} onClick={handleClick}>
      <div className="card-front">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <img src={source} alt="" />
      {!flipped && (
        <div className="corner">
          <span>Click to switch</span>
        </div>
      )}
      </div>
      {flipped && (
        <div className="card-back">
          <p className="card-long-text">{longtext}</p>
        </div>
      )}
    </SalesCardStyle>
  );
};

export default SalesCard;
