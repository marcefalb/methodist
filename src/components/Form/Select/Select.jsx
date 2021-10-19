import React from 'react';
import store from "../../../store/store";
import {observer} from "mobx-react-lite"
import Sel from 'react-select'
import './Select.css'

const Select = observer(({name, title}) => {
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
      opacity: .5,
      fontSize: 20,
    }),
    option: (provided, state) => ({
      ...provided,
      height: 60,
      padding: 20,
      fontSize: 18,
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
    })
  }
  return (
    <div className="select">
      <span className="select__title title">{title}</span>
      <Sel
        name={name}
        defaultValue={store.options[1]}
        options={store.options}
        styles={customStyles}
      />
    </div>
  );
});

export default Select;