// src/components/ImageCard.js
import React from 'react';
import Tooltip from 'react-tooltip';
import './index.css';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} data-tip data-for={`tooltip-${image.id}`} />
      <div place="top" effect="solid">
        <p>Author: {image.user.name}</p>
        <p>Description: {image.alt_description}</p>
        <a href={image.links.html} target="_blank" rel="noopener noreferrer">View on Unsplash</a>
      </div>
    </div>
  );
};

export default ImageCard;
