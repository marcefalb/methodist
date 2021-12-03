import React from "react";
import { observer } from "mobx-react-lite";

import ProfessionalSkill from "./ProfessionalSkill/ProfessionalSkill";
import AdditionalSkill from "./AdditionalSkill/AdditionalSkill";

import store from "store/store";

import "./ProfessionalSkillsList.css";

const ProfessionalSkillsList = observer(() => {
  const professionalSkillsList = store.skills.professionalSkillsList;
  const skills = store.skills;

  return (
    <div className="professional-skills">
      <span className="professional-skills__title title">
        Профессиональные компетенции
      </span>

      <ul className="professional-skills__list">
        {(professionalSkillsList.professionalSkills.size &&
          professionalSkillsList.professionalSkillsList.map((skill) => {
            return (
              <ProfessionalSkill 
                skillObj={skill} 
                key={skill.id} 
              />
            )
          })) ||
          professionalSkillsList.professionalSkillsListDemo.map((skill) => {
            return (
              <ProfessionalSkill
                skillObj={skill}
                key={skill.id}
                isDemo={true}
              />
            )
          })
        }

        {professionalSkillsList.additionalSkills.size && (
          <AdditionalSkill arrayMap={professionalSkillsList.additionalSkillsList} />
        )}
      </ul>
    </div>
  );
});

export default ProfessionalSkillsList;
