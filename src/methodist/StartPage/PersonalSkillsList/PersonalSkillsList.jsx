import React from "react";
import { observer } from "mobx-react-lite";

import PersonalSkill from "./PersonalSkill/PersonalSkill";
import SkillsSelect from "./SkillsSelect/SkillsSelect";
import skills from "store/skills";
import "./PersonalSkillsList.css";

const PersonalSkillsList = observer(() => {
  return (
    <div className="personal-skills">
      <span className="personal-skills__title title">Личностные компетенции</span>
      <div className="personal-skills__select">
        <SkillsSelect
          options={skills.personalSkillsList}
          onChange={(event) => {
            skills.toggleSkill(
              event.value,
              skills.personalSkills,
              skills.selectedPersonalSkills,
            );
            skills.setCurrentOption(null);
          }}
          currentOption={skills.currentOption}
        />
      </div>
      {skills.selectedPersonalSkillsList.length !== 0 && (
        <ul className="personal-skills__apply-list">
          {skills.selectedPersonalSkillsList.map((el) => {
            return <PersonalSkill skill={el} key={el.id} />;
          })}
        </ul>
      )}
    </div>
  );
});

export default PersonalSkillsList;
