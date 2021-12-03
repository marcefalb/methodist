import React from "react";

import { ReactComponent as IcClose } from "assets/icons/ic_close.svg";

import "./PersonalSkill.css";

const PersonalSkill = ({ skill, onBtnDeleteClick }, key) => {
  return (
    <li className="personal-skills__item skills__item_selected" key={key}>
      <span>{skill.name}</span>
      <button onClick={onBtnDeleteClick}>
        <IcClose />
      </button>
    </li>
  );
};

export default PersonalSkill;