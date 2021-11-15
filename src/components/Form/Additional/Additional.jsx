import React from "react";
import { observer } from "mobx-react-lite";
import { ReactComponent as IcPlus } from "../../../assets/icons/ic_plus.svg";

import skills from "../../../store/skills";
import ProfessionalSkill from "../ProfessionalSkill/ProfessionalSkill";
import ProfessionalSubskill from "../ProfessionalSkill/ProfessionalSubskill/ProfessionalSubskill";

const Additional = observer(({ ariaExpanded, arrayMap, setIsActiveFunc, parentSkill}) => { 
  return (
    <li className="professional-skills__additional">
      <div
        className="professional-skills__additional-body"
        aria-expanded={!ariaExpanded}
      >
        <ul className="professional-skills__additional-list">
          {arrayMap.map(skill => {
            if (skill.subskills) return <ProfessionalSkill skillObj={skill} key={skill.id} />
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
        onClick={() => setIsActiveFunc}
      >
        <IcPlus />
        <span>добавить недостающее</span>
      </div>
    </li>
  );
});

export default Additional;
