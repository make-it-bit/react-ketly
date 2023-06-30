import React, { useMemo, useState } from 'react';
import './styles/bmi-calculator.css';

const App7 = () => {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(160);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const calculateBMI = useMemo(() => {
    return (weight / ((height / 100) * (height / 100))).toFixed(1);
  }, [weight, height]);

  return (
    <>
      <h1>Project 7 - BMI Calculator!</h1>
      <div className="calculator-container">
        <form>
          <label htmlFor="weight-range">Weight: {weight} kg</label>
          <input
            type="range"
            step="1"
            min="40"
            max="220"
            defaultValue={60}
            id="weight-range"
            onChange={handleWeightChange}
          ></input>
          <label htmlFor="height-range">Height: {height} cm</label>
          <input
            type="range"
            step="1"
            min="140"
            max="220"
            defaultValue={160}
            id="height-range"
            onChange={handleHeightChange}
          ></input>
        </form>
        <h2>You BMI is:</h2>
        <p>{calculateBMI}</p>
      </div>
    </>
  );
};

export default App7;
