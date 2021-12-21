import {React, useState} from 'react';
import { observer } from 'mobx-react-lite';

import { ReactComponent as IcPlus } from "assets/icons/ic_plus.svg";
import { ReactComponent as IcArrow } from "assets/icons/ic_arrow-top.svg";
import ProfessionalSkill from '../ProfessionalSkill/ProfessionalSkill';

import store from 'store/store';

import './SkillsMap.css'

const AdditionalSkillsMap = observer(() => {
  const professionalSkillsList = store.skills.professionalSkillsList
  const [ariaExpanded, setAriaExpanded] = useState(false)


  if (!professionalSkillsList.additionalSkills.size) return null
  return (
    <div className="professional-skills__additional">
      <div
        className="professional-skills__additional-body"
        aria-expanded={!ariaExpanded}
      >

        <ul className="professional-skills__additional-map">
          {professionalSkillsList.additionalSkillsList.map(skill => {
            return (
              <ProfessionalSkill
              profSkill={skill}
              key={skill.id}
              isAdditional={true}
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

export default AdditionalSkillsMap