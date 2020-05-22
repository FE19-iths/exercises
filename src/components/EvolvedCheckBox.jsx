import React, { useState } from 'react';
import './EvolvedCheckBox.css';

const EvolvedCheckBox = ({ symbol1, label1, symbol2, label2, children }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="evolved-checkbox"
            onClick={() => setIsChecked(!isChecked)} >
            <span role="img" aria-label={isChecked ? label2 : label1}>{isChecked ? symbol2 : symbol1}</span>
            {children}
        </div>
    )
}

export default EvolvedCheckBox;

// [4a] Vanliga checkboxes är för tråkiga. Gör en komponent som ska göra samma sak som en checkbox: man ska kunna klicka på den, och i stället för kryss i en ruta ska den visa olika bilder. Använd state. Som bilder kan du visa använda emojis: 🙂 😒   https://emojipedia.org/
// Exempel på hur man skriver ut en emoji i HTML på bästa sätt:
// <span role="img" aria-label="sheep">🐑</span>
