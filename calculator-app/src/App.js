import React, { useState } from 'react';
import { evaluate } from 'mathjs';  // Import evaluate from math.js
import './App.css';

function App() {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleEqual = () => {
        try {
            // Use math.js to safely evaluate the input string
            setInput(evaluate(input).toString());
        } catch (error) {
            setInput('Error');  // Show error message if evaluation fails
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-screen">
                <input
                    type="text"
                    value={input}
                    placeholder="0"
                    readOnly
                />
            </div>
            <div className="buttons">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={handleClear}>C</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
        </div>
    );
}

export default App;
