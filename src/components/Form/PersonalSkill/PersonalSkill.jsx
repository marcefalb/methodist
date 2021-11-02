import React from 'react';
import {ReactComponent as IcPlus} from "../../../assets/icons/ic_plus.svg";
import {ReactComponent as IcClose} from "../../../assets/icons/ic_close.svg";
import './PersonalSkill.css'
import skills from "../../../store/skills";

const PersonalSkill = ({skill, skillType}) => {
  if (skillType === 'recommended')
    return (
        <li className="personal-skills__item" key={skill.id}>
          <span>{skill.label}</span>
          <button onClick={() => skills.toggleSkill(skill.id, skill.label, skillType)}>
            <IcPlus />
          </button>
        </li>
    );
  else
    return (
      <li className="personal-skills__item skills__item_selected" key={skill.id}>
        <span>{skill.label}</span>
        <button onClick={() => skills.toggleSkill(skill.id, skill.label, skillType)}>
            <IcClose />
        </button>
      </li>
    )
};

export default PersonalSkill;