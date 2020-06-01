import React, { useState } from 'react';
import './dag6.css';

const Calculator = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [operator, setOperator] = useState('+');

    // liknar "computed property" i Vue
    let result = calculateResult(x, y, operator);
    if( isNaN(result) ) {
        result = 'Du måste skriva in två tal'
    }
    return (
        <div className="calculator">
            <input type="text"
                value={x}
                onChange={e => setX(e.target.value)} />
            <select onChange={e => setOperator(e.target.value)}>
                <option value="+"> + </option>
                <option value="-"> - </option>
                <option value="*"> * </option>
                <option value="/"> / </option>
            </select>
            <input type="text"
                value={y}
                onChange={e => setY(e.target.value)} />
            = {result}
        </div>
    )
};

function calculateResult(x, y, op) {
    switch( op ) {
        case '+':
            return Number(x) + Number(y);
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        default:
            return NaN;
    }

}

// Olika sätt att konvertera string till number:
// Number(x)
// x * 1, +x, x - 0, x / 1
// parseInt(x)

/* [2a] Skapa en komponent med två textfält, där användaren ska skriva in tal. (Du får gärna lösa uppgiften med type="number" också men gör första gången med type="text".) Medan man skriver ska talens summa visas och uppdateras dynamiskt. Det kan se ut så här:
[12] + [1] = 13      // [detta är ett textfält]

[2b] Gör så att användaren kan välja räknesätt, dvs +, -, *, /.
*/
export default Calculator;
