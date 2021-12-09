import React from "react";
import { Field } from 'formik';

import "./InputItem.css";

const InputItem = ({ title, name, placeholder, value }) => {
  return (
    <div className="contacts__input-item">
      <label htmlFor={name}>{title}</label>
      <Field
        name={name}
        placeholder={placeholder}
        value={value}
        id={name}
      />
    </div>
  );
};

export default InputItem;
