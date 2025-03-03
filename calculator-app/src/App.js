import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle percentage calculation
  const handlePercentage = () => {
    try {
      setInput((prevInput) => {
        const result = eval(prevInput) / 100;
        return result.toString();
      });
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle decimal point
  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput((prevInput) => prevInput + '.');
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setInput('');
  };

  // Function to delete the last character
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  // Function to handle evaluation of the expression
  const handleEvaluate = () => {
    try {
      setInput((prevInput) => eval(prevInput).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-screen">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={handleDelete}>D</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleDecimal}>.</button>
        <button onClick={handlePercentage}>%</button>
        <button onClick={() => {}}>N</button>

      </div>
    </div>
  );
}

export default App;

