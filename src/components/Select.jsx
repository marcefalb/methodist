import React from 'react';
import store from "../store/store";
import {observer} from "mobx-react-lite";

const Select = observer(({name, title, options}) => {
  return (
    <div className="select">
      <span className="select__title">{title}</span>
      <select name={name} className="select__item">
        <option value="Дизайнер">Дизайнер</option>
        <option value="Разработчик">Разработчик</option>
        <option value="Верстальщик">Верстальщик</option>
        {/*{store.optionsList.map(item => {*/}
        {/*    const option = store.selects.get(name)*/}
        {/*    return (*/}
        {/*      <option value={option.name}>{option.title}</option>*/}
        {/*    )*/}
        {/*  }*/}
        {/*)}*/}
      </select>
    </div>
  );
});

export default Select;