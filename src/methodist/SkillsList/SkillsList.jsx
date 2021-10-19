import React from 'react';
import Skill from "../../components/Form/Skill/Skill";
import {ReactComponent as IcAddSkill} from "../../assets/icons/ic_add-skill.svg";
import './SkillsList.css'
import {observer} from "mobx-react-lite";
import skills from "../../store/skills";

const SkillsList = observer(() => {
  return (
    <div className="skills">
      <span className="skills__title title">Личностные качества</span>
      <ul className="skills__list">
        {skills.demoSkills.map((el, index) => {
            return (
              <Skill skill={el} key={index} />
            )
          }
        )}
      </ul>
      <div className="skills__input">
        <input value={skills.inputValue} onChange={event => {skills.setValue(event.target.value)}} type="text" placeholder="Навык, например “Работа в команде”"/>
        <button className="skills__add-skill" onClick={() => {skills.addSkill(skills.inputValue)}}>
          <IcAddSkill />
        </button>
      </div>
    </div>
  );
});

export default SkillsList;