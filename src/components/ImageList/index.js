// src/components/ImageList.js
import React from 'react';
import ImageCard from '../ImageCard';
import './index.css';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
