import React from 'react';
import {ReactComponent as IcClose} from "../../../assets/icons/ic_close.svg";
import './Skill.css'
import skills from "../../../store/skills";

const Skill = ({skill}) => {
  return (
    <li className="skills__item" key={skill.id}>
      <span>{skill.label}</span>
      <IcClose onClick={() => {skills.removeSkill(skill.id)}}/>
    </li>
  );
};

export default Skill;