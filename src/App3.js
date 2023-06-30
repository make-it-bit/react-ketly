import React, { /*useEffect,*/ useState } from 'react';
import './styles/quote-generator.css';

const App3 = () => {
  const [quote, setQuote] = useState();

  const handleClick = async () => {
    try {
      const response = await fetch('https://api.kanye.rest/').then((res) => res.json());
      setQuote(response.quote);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  /*useEffect(() => {
    fetch('https://api.kanye.rest/').then((res) => res.json()).then((data) => {
        setQuote(data.quote);
    });}, [quote]);*/

  return (
    <>
      <h1>Project 3 - Quote Generator!</h1>
      <div className="quote-container">
        <h2>Kanye once said:</h2>
        <h3>"{quote}"</h3>
        <button type="button" onClick={handleClick}>
          GENERATE AGAIN
        </button>
      </div>
    </>
  );
};

export default App3;
