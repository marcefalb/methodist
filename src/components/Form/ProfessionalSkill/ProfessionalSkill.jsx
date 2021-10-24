import React from 'react';
import {ReactComponent as IcDropdown} from "../../../assets/icons/ic_dropdown-indicator.svg";
import './ProfessionalSkill.css'

const ProfessionalSkill = ({skill}) => {
  return (
    <li className="professional-skills__item">
      <div className="professional-skills__dropdown-indicator">
        <IcDropdown />
      </div>
      <span className="professional-skills__label">Технология металлобработки на токарных станках</span>
      <button className="professional-skills__btn">Удалить</button>
    </li>
  );
};

export default ProfessionalSkill;