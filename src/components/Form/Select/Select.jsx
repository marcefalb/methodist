import React from 'react';
import {observer} from "mobx-react-lite"
import AsyncSelect from 'react-select'

import './Select.css'

const Select = observer(({options, name, title, onChange, onSelect, isDisabled}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: 60,
      borderRadius: 0,
      border: '1px solid #C9CACB !important',
      paddingLeft: 10,
      cursor: 'pointer',
      boxShadow: 'none'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 19,
      opacity: .5,
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 0,
      margin: 0,
      padding: 0,
      border: '1px solid #777777'
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: 20,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: 20,
    }),
    option: (provided, state) => ({
      ...provided,
      height: 60,
      padding: 18,
      fontSize: 20,
      cursor: 'pointer',
      borderBottom: '1px solid #777777',
      backgroundColor: state.isSelected ?
        'var(--secondary)'
        : state.isFocused ?
        'rgba(33, 131, 170, .5)'
        : '#fff',
      color: state.isSelected ?
        '#fff'
        : state.isFocused ?
        '#fff'
        : 'var(--main)'
    }),
    input: (provided) => ({
      ...provided,
      fontSize: 20
    }),
  }
  const noOptionsMessage = name => {
    if (name === 'speciality')
      return 'По данному запросу специальностей не найдено'
    else if (name === 'direction')
      return 'По данному запросу направлений не найдено'
  } 
  const placeholder = name => {
    if (name === 'speciality')
      return 'Например: Токарь'
    else if (name === 'direction')
      return 'Выбрать...'
  }
  const optionsList = options.map(option => {
    return { label: option.name, value: option.id };
  });
  return (
    <div className="select">
      <span className="select__title title">{title}</span>
      <AsyncSelect
        name={name}
        options={optionsList}
        // noOptionsMessage={noOptionsMessage(name)}
        styles={customStyles}
        placeholder={placeholder(name)}
        onChange={onChange}
        onSelect={onSelect}
        isDisabled={isDisabled}
      />
    </div>
  );
});

export default Select;