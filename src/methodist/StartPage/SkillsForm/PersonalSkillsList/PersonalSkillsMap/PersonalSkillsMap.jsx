import React from "react";
import { observer } from "mobx-react-lite";

import PersonalSkill from "./PersonalSkill/PersonalSkill";

import store from "store/store";

const PersonalSkillsMap = observer(() => {
  const personalSkillsList = store.skills.personalSkillsList;

  if (!personalSkillsList.selectedSkillsList.length) return null
  return (
    <ul className="personal-skills__apply-list">
      {personalSkillsList.selectedSkillsList.map((skill) => {
        return (
          <PersonalSkill
            skill={skill}
            key={skill.id}
            onBtnDeleteClick={() => personalSkillsList.toggleSkill(skill.id, true)}
          />
        );
      })}
    </ul>
  )
});

export default PersonalSkillsMap