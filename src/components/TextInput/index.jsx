import React from 'react';
import P from 'prop-types';
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
  );
};

TextInput.propTypes = {
  onChange: P.func.isRequired,
  value: P.string.isRequired,
};

export default TextInput;
