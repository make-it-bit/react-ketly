import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import ImageCarousel from './components/ImageCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageCarousel />
  </React.StrictMode>
);
