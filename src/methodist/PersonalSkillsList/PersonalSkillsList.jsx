import React from "react";
import { observer } from "mobx-react-lite";

import PersonalSkill from "../../components/Form/PersonalSkill/PersonalSkill";
import SkillsSelect from "./SkillsSelect/SkillsSelect";
import skills from "../../store/skills";
import "./PersonalSkillsList.css";

const PersonalSkillsList = observer(() => {
  return (
    <div className="personal-skills">
      <span className="personal-skills__title title">Личностные качества</span>
      <div className="personal-skills__select">
        <SkillsSelect 
          options={skills.recommendedPersonalSkills}
          onChange={(event) => {
            skills.addSkill(event.label, skills.selectedPersonalSkills, 'default')
          }}
        />
      </div>
      <span className="personal-skills__title title">Рекомендуемые навыки</span>
      <ul className="personal-skills__recommended-list">
        {skills.recommendedPersonalSkills.map((el) => {
          return <PersonalSkill skill={el} skillType="recommended" />;
        })}
      </ul>
      {skills.selectedPersonalSkills.length !== 0 && (
        <ul className="personal-skills__apply-list">
          {skills.selectedPersonalSkills.map((el) => {
            return <PersonalSkill skill={el} skillType="selected" />;
          })}
        </ul>
      )}
    </div>
  );
});

export default PersonalSkillsList;
