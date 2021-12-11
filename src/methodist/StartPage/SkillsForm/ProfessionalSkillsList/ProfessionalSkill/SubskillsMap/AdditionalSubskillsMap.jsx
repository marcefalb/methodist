import {React, useState} from 'react';
import { observer } from 'mobx-react-lite';

import { ReactComponent as IcPlus } from "assets/icons/ic_plus.svg";
import { ReactComponent as IcArrow } from "assets/icons/ic_arrow-top.svg";
import ProfessionalSubskill from '../ProfessionalSubskill/ProfessionalSubskill';

import store from 'store/store';

const AdditionalSubskillsMap = observer(({profSkill}) => {
  const professionalSkillsList = store.skills.professionalSkillsList
  const [ariaExpanded, setAriaExpanded] = useState(false)
  const toggleSubskill = (profSkill, subskill) => {
    professionalSkillsList.toggleSubskill(profSkill, subskill.id, true)
  }

  if (!profSkill.additionalSubskills.size) return null
  return (
    <div className="professional-skills__additional professional-skills__additional_subskills">
      <div
        className="professional-skills__additional-body"
        aria-expanded={!ariaExpanded}
      >

        <ul className="professional-skills__additional-list">
          {profSkill.additionalSubskillsList.map(subskill => {
            return (
              <ProfessionalSubskill
                subskill={subskill}
                key={subskill.id}
                isAdditional={true}
                toggleSubskill={() => toggleSubskill(profSkill, subskill)}
              />
            )
          })}
        </ul>
        
      </div>
      <div
        className="professional-skills__additional-header"
        onClick={() => setAriaExpanded(!ariaExpanded)}
      >
        {(ariaExpanded && (<IcArrow />)) || (<IcPlus />)}
        {(ariaExpanded && (<span>свернуть</span>)) || (<span>добавить недостающее</span>)}
      </div>
    </div>
  )
});

export default AdditionalSubskillsMap