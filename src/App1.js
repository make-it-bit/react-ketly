import React, { useState } from 'react';
import './styles/image-carousel.css';

const images = [
  './images/pastel-green.jpg',
  './images/pastel-orange.jpg',
  './images/pastel-pink.jpg',
  './images/pastel-purple.jpg',
  './images/pastel-yellow.jpg',
];

const App1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const quantityOfImages = images.length;

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === quantityOfImages - 1 ? 0 : currentImageIndex + 1);
  };
  const previousImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? quantityOfImages - 1 : currentImageIndex - 1);
  };

  return (
    <>
      <h1>Project 1 - Image Carousel!</h1>
      <div className="image-container">
        <div id="left-arrow" onClick={previousImage} />
        {images.map((image, index) => {
          return (
            <div className="slide">
              {index === currentImageIndex && <img src={image} key={index} className="img-carousel" alt="" />}
            </div>
          );
        })}
        <div id="right-arrow" onClick={nextImage} />
      </div>
    </>
  );
};

export default App1;
