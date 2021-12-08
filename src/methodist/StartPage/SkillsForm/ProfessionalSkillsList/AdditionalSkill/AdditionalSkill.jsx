import {React, useState} from "react";
import { observer } from "mobx-react-lite";
import { ReactComponent as IcPlus } from "assets/icons/ic_plus.svg";

import ProfessionalSubskill from "../ProfessionalSkill/ProfessionalSubskill/ProfessionalSubskill";

import store from "store/store";

const Additional = observer(({ profSkill }) => { 
  const professionalSkillsList = store.skills.professionalSkillsList

  const [ariaExpanded, setAriaExpanded] = useState(false)

  return (
    <li className="professional-skills__additional">
      <div
        className="professional-skills__additional-body"
        aria-expanded={!ariaExpanded}
      >
        <ul className="professional-skills__additional-list">
          {profSkill.additionalSubskillsList.map(skill => {
            return (
              <ProfessionalSubskill
              subskill={skill}
              onAcceptClick={() => {
                document.documentElement.style.overflow = "auto"
                professionalSkillsList.toggleSkill(profSkill.id, true)
              }}
              key={skill.id}
              />
            )
          })}
        </ul>
      </div>
      <div
        className="professional-skills__additional-header"
        onClick={() => setAriaExpanded(!ariaExpanded)}
      >
        <IcPlus />
        <span>добавить недостающее</span>
      </div>
    </li>
  );
});

export default Additional;
