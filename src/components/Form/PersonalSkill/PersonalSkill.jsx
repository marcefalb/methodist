import React from 'react';
import {ReactComponent as IcPlus} from "../../../assets/icons/ic_plus.svg";
import './PersonalSkill.css'
import skills from "../../../store/skills";

const PersonalSkill = ({skill}) => {
  return (
    <li className="skills__item" key={skill.id}>
      <span>{skill.label}</span>
      <IcPlus onClick={() => {skills.removeSkill(skill.id)}}/>
    </li>
  );
};

export default PersonalSkill;