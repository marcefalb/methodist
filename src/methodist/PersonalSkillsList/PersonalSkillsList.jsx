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
          options={skills.personalSkillsList}
          onChange={(event) => {
            skills.addSkill(
              event.label,
              skills.selectedPersonalSkills,
              "default"
            );
            skills.setCurrentOption(null);
          }}
          currentOption={skills.currentOption}
        />
      </div>
      {skills.selectedPersonalSkillsList.length !== 0 && (
        <ul className="personal-skills__apply-list">
          {skills.selectedPersonalSkillsList.map((el) => {
            console.log(el);
            return <PersonalSkill skill={el} key={el.id} />;
          })}
        </ul>
      )}
    </div>
  );
});

export default PersonalSkillsList;
