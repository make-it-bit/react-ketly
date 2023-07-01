import React, { useState } from 'react';
import './styles/app6.css';

const videos = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4',
];

const App6 = () => {
  const [videoSrc, setVideoSrc] = useState(videos[0]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleChange = (event) => {
    setVideoSrc(videos[event.target.value]);
    setIsDisplayed(true);
  };

  return (
    <>
      <h1>Project 6 - Video Player!</h1>
      <div className="video-container">
        <p>CHOOSE ONE FROM THE LIST:</p>
        <form>
          {videos.map((_video, index) => (
            <div key={`video-option-${index}`} className="video-option">
              <input type="radio" name="videos" value={index} onChange={handleChange}></input>
              <label htmlFor={`video-${index}`}>VIDEO-{index + 1}</label>
            </div>
          ))}
        </form>
        {isDisplayed && <video loop controls autostart="true" autoPlay muted src={videoSrc}></video>}
      </div>
    </>
  );
};

export default App6;
