import React from 'react';
import { Link } from 'react-router-dom';
import './styles/app0.css';

const App0 = () => {
  return (
    <>
      <div className="container">
        {Array.from({ length: 7 }, (_project, index) => (
          <div key={`project-${index}`} id={`project-${index}`} className="project">
            <Link to={`/App${index + 1}`}>PROJECT {index + 1}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default App0;
