import React from 'react';
import {ReactComponent as IcClose} from "../../../assets/icons/ic_close.svg";
import './PersonalSkill.css'
import skills from "../../../store/skills";

const PersonalSkill = ({skill}, key) => {
  return (
    <li className="personal-skills__item skills__item_selected" key={key}>
      <span>{skill.name}</span>
      <button onClick={() => 
          skills.toggleSkill(skill.id, skills.selectedPersonalSkills, skills.personalSkills
        )}>
          <IcClose />
      </button>
    </li>
  )
};

export default PersonalSkill;