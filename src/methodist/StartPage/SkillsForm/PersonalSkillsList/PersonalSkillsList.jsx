import React from "react";
import { observer } from "mobx-react-lite";

import PersonalSkill from "./PersonalSkill/PersonalSkill";
import SkillsSelect from "./PersonalSkillsSelect/PersonalSkillsSelect";

import store from "store/store";

import "./PersonalSkillsList.css";

const PersonalSkillsList = observer(() => {
  const personalSkillsList = store.skills.personalSkillsList;
  const skills = store.skills;

  const selectOnChange = (event) => {
    skills.toggleSkill(
      event.value,
      personalSkillsList.personalSkills,
      personalSkillsList.selectedPersonalSkills
    );
    personalSkillsList.setCurrentSelectOption(null);
  };

  return (
    <div className="personal-skills">

      <span className="personal-skills__title title">
        Личностные компетенции
      </span>

      <div className="personal-skills__select">
        <SkillsSelect
          options={personalSkillsList.personalSkillsList}
          onChange={(event) => selectOnChange(event)}
          currentOption={personalSkillsList.currentSelectOption}
        />
      </div>

      {personalSkillsList.selectedPersonalSkillsList.length !== 0 && (
        <ul className="personal-skills__apply-list">
          {personalSkillsList.selectedPersonalSkillsList.map((skill) => {
            return (
              <PersonalSkill
                skill={skill}
                key={skill.id}
                onBtnDeleteClick={() => skills.toggleSkill(
                  skill.id,
                  personalSkillsList.selectedPersonalSkills,
                  personalSkillsList.personalSkills
                )}
              />
            );
          })}
        </ul>
      )}
      
    </div>
  );
});

export default PersonalSkillsList;
