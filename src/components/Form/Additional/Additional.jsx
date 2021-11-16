import {React, useState} from "react";
import { observer } from "mobx-react-lite";
import { ReactComponent as IcPlus } from "../../../assets/icons/ic_plus.svg";

import skills from "../../../store/skills";
import ProfessionalSkill from "../ProfessionalSkill/ProfessionalSkill";
import ProfessionalSubskill from "../ProfessionalSkill/ProfessionalSubskill/ProfessionalSubskill";

const Additional = observer(({ arrayMap, parentSkill}) => { 
  const [ariaExpanded, setAriaExpanded] = useState(false)

  return (
    <li className="professional-skills__additional">
      <div
        className="professional-skills__additional-body"
        aria-expanded={!ariaExpanded}
      >
        <ul className={parentSkill ? "professional-skills__additional-list" : "professional-skills__accordion-list_group"}>
          {arrayMap.map(skill => {
            if (skill.subskills) return <ProfessionalSkill skillObj={skill} key={skill.id} isAdditional={true} />
            else return (
              <ProfessionalSubskill
              subskill={skill}
              onAcceptClick={() => {
                document.documentElement.style.overflow = "auto"
                skills.toggleSkill(
                  skill.id,
                  parentSkill.additionalSubskills,
                  parentSkill.subskills
                )
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
