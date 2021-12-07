import React from 'react';
import { observer } from 'mobx-react-lite';

import ProfessionalSkill from "../ProfessionalSkill/ProfessionalSkill";

import store from "store/store";

const ProfessionalSkillsMap = observer((type) => {
  const professionalSkillsList = store.skills.professionalSkillsList;
  const arrayMap = type === 'Additional' ? professionalSkillsList.additionalSkillsList : professionalSkillsList.professionalSkillsList
  const isDemo = professionalSkillsList.professionalSkills.size ? false : true
  const isAdditional =  type === 'Additional' ? true : false

  if (!arrayMap.size && isAdditional) return null
  return (
    <ul className="professional-skills__list">
      {arrayMap.map((skill) => {
          return (
            <ProfessionalSkill 
              profSkill={skill} 
              key={skill.id} 
              isDemo={isDemo}
              isAdditional={isAdditional}
            />
          )
        })
      }
    </ul>
  )
});

export default ProfessionalSkillsMap