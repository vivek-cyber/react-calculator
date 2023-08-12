import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  const validateInput = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Both numbers are required.');
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setErrorMessage('Please enter valid numbers.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const performOperation = () => {
    if (!validateInput()) {
      setResult('');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let calculatedResult = 0;

    switch (operation) {
      case 'add':
        calculatedResult = n1 + n2;
        break;
      case 'subtract':
        calculatedResult = n1 - n2;
        break;
      case 'multiply':
        calculatedResult = n1 * n2;
        break;
      case 'divide':
        calculatedResult = n1 / n2;
        break;
      default:
        break;
    }

    setResult(`Result: ${calculatedResult}`);
  };

  return (
    <div id='calu'>
      <h2>React Calculator</h2>
      <div id="inputs">
      <input
        type="text"
        placeholder="Num 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Num 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      </div>
      <br />
      <div id="btns">
      <button onClick={() => { setOperation('add'); performOperation(); }}>+</button>
      <button onClick={() => { setOperation('subtract'); performOperation(); }}>-</button>
      <button onClick={() => { setOperation('multiply'); performOperation(); }}>-</button>
      <button onClick={() => { setOperation('divide'); performOperation(); }}>/</button>
      </div>
      {errorMessage && <p className='errormsg' style={{ color: 'red' }}>{errorMessage}</p>}
      {result && <p className='result' style={{ color: 'green' }}>{result}</p>}
    </div>
  );
}

export default Calculator;
