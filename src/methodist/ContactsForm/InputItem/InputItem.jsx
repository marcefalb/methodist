import React from 'react';

import Input from '../../../components/Form/Input/Input'
import './InputItem.css'

const InputItem = ({title, name, placeholder, value, onChange}) => {
  return (
    <div className="contacts__input-item">
      <span>{title}</span>
      <Input name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
};

export default InputItem