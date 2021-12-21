import React from "react";
import { observer } from "mobx-react-lite";

import PersonalSkillsMap from "./PersonalSkillsMap/PersonalSkillsMap";
import SkillsSelect from "./PersonalSkillsSelect/PersonalSkillsSelect";

import store from "store/store";

import "./PersonalSkillsList.css";

const PersonalSkillsList = observer(() => {
  const personalSkillsList = store.skills.personalSkillsList;

  const selectOnChange = (event) => {
    personalSkillsList.toggleSkill(event.value, false);
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

      <div>
        <PersonalSkillsMap />
      </div>   
    </div>
  );
});

export default PersonalSkillsList;
