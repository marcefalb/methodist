import React from 'react';
import {ReactComponent as IcClose} from "../../../assets/icons/ic_close.svg";
import './Skill.css'
import skills from "../../../store/skills";

const Skill = ({skill, key}) => {
  console.log(key)
  return (
    <li className="skills__item" key={key}>
      <span>{skill}</span>
      <IcClose onClick={event => {skills.delSkill(event.target.key)}}/>
    </li>
  );
};

export default Skill;