import React, { useState } from "react";
import "./TopicCard.scss";

const TopicCard = ({ title, youtubeLink, imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (youtubeLink) {
      window.open(youtubeLink, "_blank");
    }
  };

  return (
    <div 
      className="topic-card" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    > 
      <h4 className="topic-card-title">{title}</h4>
      <div className="topic-card-image-container">
        <img src={imageSrc} alt={title} className="topic-card-image" />
        <div className={`topic-card-summary ${isHovered ? "visible" : ""}`}>
          <p>{description}</p>
        </div>
      </div>
      <div className="topic-card-button">
        <a 
          href={youtubeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button-link video-button"
          onClick={(e) => {
            e.stopPropagation();
            if (!youtubeLink) {
              e.preventDefault();
              const navbar = document.querySelector('.navbar-signify');
              const navbarHeight = navbar ? navbar.offsetHeight : 80;
              const element = document.getElementById(title.replace(/\s+/g, '-').toLowerCase());
              if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 20;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }
          }}
        >
          Ver más en YouTube
        </a>
      </div>
    </div>
  );
};

export default TopicCard;
