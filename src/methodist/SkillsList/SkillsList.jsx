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
        {skills.demoSkills.map(el => {
            return (
              <Skill skill={el}/>
            )
          }
        )}
      </ul>
      <div className="skills__input">
        <input
          value={skills.inputValue}
          onKeyDown={event => {
            skills.addSkill(skills.inputValue, event)
          }}
          onChange={event => {
            skills.setValue(event.target.value)
          }}
          type="text"
          placeholder="Навык, например “Работа в команде”"
        />
        <button
          className="skills__add-skill"
          onClick={(event) => {
            skills.addSkill(skills.inputValue, event)
          }}
        >
          <IcAddSkill />
        </button>
      </div>
    </div>
  );
});

export default SkillsList;