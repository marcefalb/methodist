import React from 'react';
import Skill from "../../components/Form/Skill/Skill";
import {ReactComponent as IcAddSkill} from "../../assets/icons/ic_add-skill.svg";
import './SkillsList.css'
import {observer} from "mobx-react-lite";
import Skills from "../../store/skills";

const SkillsList = observer(() => {
  return (
    <div className="skills">
      <span className="skills__title title">Личностные качества</span>
      <ul className="skills__list">
        {Skills.demoSkills.map(el => {
            return (
              <Skill skill={el}/>
            )
          }
        )}
      </ul>
      <div className="skills__input">
        <input value={Skills.inputValue} onChange={event => {Skills.setValue(event.target.value)}} type="text" placeholder="Навык, например “Работа в команде”"/>
        <button className="skills__add-skill" onClick={() => {Skills.addSkill(Skills.inputValue)}}>
          <IcAddSkill />
        </button>
      </div>
    </div>
  );
});

export default SkillsList;