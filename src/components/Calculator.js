import './Calculator.css';

function Calculator() {
    return (
        <div className="Calc">
            <div className="row1 Display">0</div>
            <div className="row2">
                <button className="Calc-button">AC</button>
                <button className="Calc-button">+/-</button>
                <button className="Calc-button">%</button>
                <button className="Calc-button Calc-operator">/</button>
            </div>
            <div className="row3">
                <button className="Calc-button">7</button>
                <button className="Calc-button">8</button>
                <button className="Calc-button">9</button>
                <button className="Calc-button Calc-operator">x</button>
            </div>
            <div className="row4">
                <button className="Calc-button">4</button>
                <button className="Calc-button">5</button>
                <button className="Calc-button">6</button>
                <button className="Calc-button Calc-operator">-</button>
            </div>
            <div className="row5">
                <button className="Calc-button">1</button>
                <button className="Calc-button">2</button>
                <button className="Calc-button">3</button>
                <button className="Calc-button Calc-operator">+</button>
            </div>
            <div className="row6">
                <button className="Calc-button-zero">0</button>
                <button className="Calc-button">.</button>
                <button className="Calc-button Calc-operator">=</button>
            </div>
        </div>
    );
}

export default Calculator;