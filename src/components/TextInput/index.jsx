import React from 'react';
import './styles.css';

const TextInput = ({ type, name, onChange, value, placeholder = '...' }) => {
    return (
        <input
            className="text-input"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}


export default TextInput;





