import React, { useState } from "react";
import "./TopicCard.scss";

const TopicCard = ({ title, youtubeLink, imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="topic-card" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(youtubeLink, "_blank")}
    > 
      <h4 className="topic-card-title">{title}</h4>
      <div className="topic-card-image-container">
        <img src={imageSrc} alt={title} className="topic-card-image" />
        <div className={`topic-card-summary ${isHovered ? "visible" : ""}`}>
          <p>{description}</p>
        </div>
      </div>
      <div className="topic-card-button">
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="button-link">
          Ver más en YouTube
        </a>
      </div>
    </div>
  );
};

export default TopicCard;
