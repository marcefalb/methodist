import React from 'react';

import './Input.css'

const Input = ({placeholder, name, value, onChange}) => {
  return (
    <input type="text" placeholder={placeholder} name={name} className="contacts__input" value={value} onChange={onChange} />
  )
};

export default Input