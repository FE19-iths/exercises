import React from 'react';
import './EvolvedCheckBox.css';

const EvolvedCheckBox = ({ items, children, index, setIndex }) => {
    // const [index, setIndex] = useState(0);
    const nextImage = () => setIndex(index < items.length - 1 ? index + 1 : 0)

    let label  = items[index].label;
    let symbol = items[index].symbol;

    return (
        <div className="evolved-checkbox"
            onClick={nextImage} >
            <span role="img" aria-label={label}>{symbol}</span>
            {children}
        </div>
    )
}

export default EvolvedCheckBox;

// [4a] Vanliga checkboxes är för tråkiga. Gör en komponent som ska göra samma sak som en checkbox: man ska kunna klicka på den, och i stället för kryss i en ruta ska den visa olika bilder. Använd state. Som bilder kan du visa använda emojis: 🙂 😒   https://emojipedia.org/
// Exempel på hur man skriver ut en emoji i HTML på bästa sätt:
// <span role="img" aria-label="sheep">🐑</span>

// [*4b] Gör så att din egen checkbox kan visa fler än två bilder.

// [4c] Flytta state till parent component. Använd tekniken "lifting state up" för att skicka state mellan parent och child.
