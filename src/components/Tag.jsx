import React from 'react';

const Tag = ({ selected, doSelect }) => (
    <div>
        <button onClick={doSelect}> Tag </button> {selected ? "I'm it" : ""}
    </div>
)

export default Tag;
