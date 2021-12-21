import React from 'react';
import { observer } from 'mobx-react-lite';

import ProfessionalSkill from "../ProfessionalSkill/ProfessionalSkill";

import store from "store/store";

const ProfessionalSkillsMap = observer(() => {
  const professionalSkillsList = store.skills.professionalSkillsList;
  const isDemo = professionalSkillsList.professionalSkills.size ? false : true

  return (
    <ul className="professional-skills__list">
      {professionalSkillsList.professionalSkillsList.map((skill) => {
          return (
            <ProfessionalSkill 
              profSkill={skill} 
              key={skill.id} 
              isDemo={isDemo}
            />
          )
        })
      }
    </ul>
  )
});

export default ProfessionalSkillsMap