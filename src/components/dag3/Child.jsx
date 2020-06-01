import React from 'react';

const Child = ({ candy }) => (
    <div>
        <h2> child </h2>
        Energy level: {candy === '' ? 'low.' : 'over 9000!'}
    </div>
)

export default Child;
