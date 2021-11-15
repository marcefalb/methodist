import React from 'react';

import Input from '../../../components/Form/Input/Input'
import './InputItem.css'

const InputItem = ({title, name, placeholder}) => {
  return (
    <div className="contacts__input-item">
      <span>{title}</span>
      <Input name={name} placeholder={placeholder} />
    </div>
  )
};

export default InputItem