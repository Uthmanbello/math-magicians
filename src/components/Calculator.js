import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    setCalculation(calculate(calculation, buttonName));
  }

  return (
    <div className="Calc">
      <div className="row1 Display">{calculation.next || calculation.total || '0'}</div>
      <div className="row2">
        <button type="button" className="Calc-button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="Calc-button Calc-operator" onClick={() => handleClick('÷')}>÷</button>
      </div>
      <div className="row3">
        <button type="button" className="Calc-button" onClick={() => handleClick('7')}>7</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('8')}>8</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="Calc-button Calc-operator" onClick={() => handleClick('x')}>x</button>
      </div>
      <div className="row4">
        <button type="button" className="Calc-button" onClick={() => handleClick('4')}>4</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('5')}>5</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="Calc-button Calc-operator" onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="row5">
        <button type="button" className="Calc-button" onClick={() => handleClick('1')}>1</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('2')}>2</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="Calc-button Calc-operator" onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="row6">
        <button type="button" className="Calc-button-zero" onClick={() => handleClick('0')}>0</button>
        <button type="button" className="Calc-button" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="Calc-button Calc-operator" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
