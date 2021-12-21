import React from "react";

import "./Input.css";

const Input = ({ placeholder, name, value, onChange }) => {
  return (
    <input
      type="text"
      className="contacts__input"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
