import React, { useState } from 'react';
import './Gallery.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Correct images array to use imported image files
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      <p>Explore our school's wonderful moments captured in photos.</p>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(image)}
          >
            <img src={image} alt={`Gallery Moment ${index + 1}`} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={currentImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
