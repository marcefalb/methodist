import React from 'react';

import './Input.css'

const Input = ({placeholder, name}) => {
  return (
    <input type="text" placeholder={placeholder} name={name} className="contacts__input" />
  )
};

export default Input