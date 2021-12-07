import { observer } from 'mobx-react-lite';
import React from 'react';

import ProfessionalSubskill from "../ProfessionalSubskill/ProfessionalSubskill";

import store from "store/store";

const ProfessionalSubskillsMap = observer(({type, profSkill}) => {
  const professionalSkillsList = store.skills.professionalSkillsList
  const arrayMap = type === "Additional" ? profSkill.additionalSubskillsList : profSkill.subskillsList
  const isAdditional = type === "Additional" ? true : false
  
  if (!arrayMap.size && isAdditional) return null
  else if (!arrayMap.length) return (
    <li className="professional-skills__accordion-item">
      <span>Компетенции отсутствуют</span>
    </li>
  )
  return (
    <ul className="professional-skills__accordion-list">
      {arrayMap.map((subskill) => {
        return (
          <ProfessionalSubskill
            subskill={subskill}
            isAdditional={isAdditional}
            onAcceptClick={() => {
              document.documentElement.style.overflow = "auto";
              professionalSkillsList.toggleSkill(subskill.id, false)
            }}
            key={subskill.id}
          />
        );
      })}
    </ul>
  )
});

export default ProfessionalSubskillsMap