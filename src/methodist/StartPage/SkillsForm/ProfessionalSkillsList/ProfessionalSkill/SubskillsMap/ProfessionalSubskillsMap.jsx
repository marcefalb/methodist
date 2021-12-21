import { observer } from 'mobx-react-lite';
import React from 'react';

import ProfessionalSubskill from "../ProfessionalSubskill/ProfessionalSubskill";

import store from 'store/store';

const ProfessionalSubskillsMap = observer(({profSkill}) => {
  const professionalSkillsList = store.skills.professionalSkillsList
  const toggleSubskill = (profSkill, subskill) => {
    professionalSkillsList.toggleSubskill(profSkill, subskill.id, false)
  }
  
  if (!profSkill.subskills.size) return (
    <div className="professional-skills__accordion-item">
      <span>Компетенции отсутствуют</span>
    </div>
  )
  return (
    <ul className="professional-skills__accordion-list">
      {profSkill.subskillsList.map((subskill) => {
        return (
          <ProfessionalSubskill
            subskill={subskill}
            isAdditional={false}
            key={subskill.id}
            toggleSubskill={() => toggleSubskill(profSkill, subskill)}
          />
        );
      })}
    </ul>
  )
});

export default ProfessionalSubskillsMap