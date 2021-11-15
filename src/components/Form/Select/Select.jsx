import React from 'react';
import {observer} from "mobx-react-lite"
import AsyncSelect from 'react-select'

import './Select.css'

const Select = observer(({options, name, title, onChange, isDisabled, selectValue}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: 60,
      borderRadius: 0,
      border: '1px solid var(--border-line) !important',
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
        '#f0f0f0'
        : '#fff',
      color: state.isSelected ?
        '#fff'
        : 'var(--main)',
      transition: 'all .2s'
    }),
    input: (provided) => ({
      ...provided,
      fontSize: 20
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      height: 60,
      padding: 18,
      fontSize: 20,
    }),
  }
  const noOptionsMessage = selectName => {
    if (selectName === 'speciality')
      return 'По данному запросу специальностей не найдено'
    else if (selectName === 'direction')
      return 'По данному запросу направлений не найдено'
    else if (selectName === 'city')
      return 'По данному запросу городов не найдено'
  } 
  const placeholder = selectName => {
    if (selectName === 'speciality')
      return 'Токарь'
    else if (selectName === 'direction')
      return 'Выбрать...'
    else if (selectName === 'city')
      return 'Москва'
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
        noOptionsMessage={() => noOptionsMessage(name)}
        styles={customStyles}
        placeholder={placeholder(name)}
        onChange={onChange}
        isDisabled={isDisabled}
        value={selectValue}
      />
    </div>
  );
});

export default Select;