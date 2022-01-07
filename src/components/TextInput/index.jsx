import React from 'react';
import './styles.css';

const TextInput = ({ onChange, value }) => {
    return (
        <input
            className="text-input"
            name="searchValue"
            type="search"
            value={value}
            onChange={onChange}
            placeholder="Enter your search..."
        />
    )
}


export default TextInput;





