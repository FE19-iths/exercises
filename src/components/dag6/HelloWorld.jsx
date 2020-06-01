import React, { useState } from 'react';


const HelloWorld = () => {
    const [name, setName] = useState('');
    return (
        <div>
            {name === '' ? "Hello! What's your name?" : `Hello ${name}!` }
            <br />
            <input type="text" onChange={e => setName(e.target.value)} /> <br/>
            {name}.
        </div>
    )
};

/* [1] Skapa en komponent med namnet HelloWorld. När komponenten visas första gången ska den visa texten: "Hello! What's your name?" Det ska också finnas ett textfält där användaren ska skriva in sitt namn. Medan man skriver ska det som användaren skrivit hittills visas under textfältet.
*/
export default HelloWorld;
