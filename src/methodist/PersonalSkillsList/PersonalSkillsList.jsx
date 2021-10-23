import React from 'react';
import PersonalSkill from "../../components/Form/PersonalSkill/PersonalSkill";
import {ReactComponent as IcSearch} from "../../assets/icons/ic_search.svg";
import './PersonalSkillsList.css'
import {observer} from "mobx-react-lite";
import skills from "../../store/skills";

const PersonalSkillsList = observer(() => {
  return (
    <div className="personal-skills">
      <span className="personal-skills__title title">Личностные качества</span>
      <div className="personal-skills__input">
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
        <div className="personal-skills__search">
          <IcSearch />
        </div>
      </div>
      <span className="personal-skills__title title">Рекомендуемые навыки</span>
      <ul className="personal-skills__recommended-list">
        {skills.demoSkills.map(el => {
            return (
              <PersonalSkill skill={el}/>
            )
          }
        )}
      </ul>
      <ul className="personal-skills__apply-list">
        {skills.demoSkills.map(el => {
            return (
              <PersonalSkill skill={el}/>
            )
          }
        )}
      </ul>
    </div>
  );
});

export default PersonalSkillsList;