import React, { useState } from 'react';

const Input = ({ value, label, placeholder, doValidate, handleChange }) => {
    // const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    let [className, errorMessage] = touched ? doValidate(value) : ['', ''];
    return (
        <div className="form-group">
            <label> {label} </label>
            <input type="text" placeholder={placeholder}
                onChange={handleChange}
                onBlur={() => setTouched(true)}
                className={className} />
            <div className="error">{errorMessage}</div>
        </div>
    )
};

export default Input;

/*
<MyInput
label={"Exempel"}
    placeholder={"Exempel"}
doValidate={validateNotEmpty}
handleChange={null} />
*/
