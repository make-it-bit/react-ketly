import React, { useState } from 'react';
import './styles/app1.css';

const images = [
  './images/pastel-green.jpg',
  './images/pastel-orange.jpg',
  './images/pastel-pink.jpg',
  './images/pastel-purple.jpg',
  './images/pastel-yellow.jpg',
];

const App1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };
  const previousImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  return (
    <>
      <h1>Project 1 - Image Carousel!</h1>
      <div className="image-container">
        <div id="left-arrow" className="arrow" onClick={previousImage} />
        {images.map((image, index) => {
          return (
            <div key={`image-${index}`} className="image">
              {index === currentImageIndex && <img className="img-carousel" src={image} alt="pastel-background" />}
            </div>
          );
        })}
        <div id="right-arrow" className="arrow" onClick={nextImage} />
      </div>
    </>
  );
};

export default App1;
