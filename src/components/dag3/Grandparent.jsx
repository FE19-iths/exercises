import React, { useState } from 'react';
import Parent from './Parent';

const Grandparent = () => {
    const [question, setQuestion] = useState('');
    return (
        <div>
            <h2> Grandparent </h2>
            <button onClick={() => setQuestion('Give candy?')}> Give candy </button>
            <Parent candy={question} />
        </div>
    )
}

export default Grandparent;
