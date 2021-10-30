import React from 'react';
import {observer} from "mobx-react-lite"
import AsyncSelect from 'react-select'

import { ReactComponent as IcSearch } from "../../../assets/icons/ic_search.svg";
import './SkillsSelect.css'

const Select = observer(({options, onChange}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: 60,
      borderRadius: 0,
      border: 'none',
      borderBottom: '1px solid var(--border-line) !important',
      paddingLeft: 30,
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
      // border: '1px solid #777777'
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
      paddingLeft: 40,
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
    noOptionsMessage: (provided) => ({
      ...provided,
      height: 60,
      padding: 18,
      fontSize: 20,
    }),
  }
  const DropdownIndicator = () => {
    return (
      <div className="personal-skills__search">
        <IcSearch />
      </div>
    );
  }
  const optionsList = options.map(option => {
    return { label: option.name, value: option.id };
  });
  return (
    <div className="select">
      <AsyncSelect
        name={'skill'}
        placeholder={"Навык, например “Работа в команде”"}
        noOptionsMessage={() => "Навыков по данному запросу не найдено"}
        options={optionsList}
        styles={customStyles}
        dropdownIndicator={() => <IcSearch />}
        components={{ DropdownIndicator }}
        onChange={onChange}
      />
    </div>
  );
});

export default Select;