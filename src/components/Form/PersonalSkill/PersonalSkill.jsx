import React from 'react';
import {ReactComponent as IcClose} from "../../../assets/icons/ic_close.svg";
import './PersonalSkill.css'
import skills from "../../../store/skills";

const PersonalSkill = ({skill}) => {
  return (
    <li className="skills__item" key={skill.id}>
      <span>{skill.label}</span>
      <IcClose onClick={() => {skills.removeSkill(skill.id)}}/>
    </li>
  );
};

export default PersonalSkill;