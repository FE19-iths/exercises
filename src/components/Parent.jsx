import React, { useState } from 'react';
import Child from './Child';

const Parent = ({ candy }) => {
    const [allow, setAllow] = useState(false);
    return (
        <div>
            <h2> Parent </h2>
            {candy !== '' ? ( <>
                <button onClick={() => setAllow(false)}> Nope </button>
                <button onClick={() => setAllow(true)}> Alright, it's saturday </button>
            </>) : null}
            <Child candy={allow ? candy : ''} />
        </div>
    )
}

export default Parent;
