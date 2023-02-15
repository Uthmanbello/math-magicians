import './Calculator.css';

function Calculator() {
  return (
    <div className="Calc">
      <div className="row1 Display">0</div>
      <div className="row2">
        <button type="button" className="Calc-button">AC</button>
        <button type="button" className="Calc-button">+/-</button>
        <button type="button" className="Calc-button">%</button>
        <button type="button" className="Calc-button Calc-operator">&#247;</button>
      </div>
      <div className="row3">
        <button type="button" className="Calc-button">7</button>
        <button type="button" className="Calc-button">8</button>
        <button type="button" className="Calc-button">9</button>
        <button type="button" className="Calc-button Calc-operator">&#215;</button>
      </div>
      <div className="row4">
        <button type="button" className="Calc-button">4</button>
        <button type="button" className="Calc-button">5</button>
        <button type="button" className="Calc-button">6</button>
        <button type="button" className="Calc-button Calc-operator">-</button>
      </div>
      <div className="row5">
        <button type="button" className="Calc-button">1</button>
        <button type="button" className="Calc-button">2</button>
        <button type="button" className="Calc-button">3</button>
        <button type="button" className="Calc-button Calc-operator">+</button>
      </div>
      <div className="row6">
        <button type="button" className="Calc-button-zero">0</button>
        <button type="button" className="Calc-button">.</button>
        <button type="button" className="Calc-button Calc-operator">=</button>
      </div>
    </div>
  );
}

export default Calculator;
