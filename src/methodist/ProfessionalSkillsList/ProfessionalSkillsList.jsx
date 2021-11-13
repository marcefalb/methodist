import React from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcPlus } from "../../assets/icons/ic_plus.svg";
import skills from "../../store/skills";
import ProfessionalSkill from "../../components/Form/ProfessionalSkill/ProfessionalSkill";
import "./ProfessionalSkillsList.css";

const ProfessionalSkillsList = observer(() => {
  return (
    <div className="professional-skills">
      <span className="professional-skills__title title">
        Профессиональные компетенции
      </span>
      <ul className="professional-skills__list">
        {skills.professionalSkillsList.map((el) => {
          return <ProfessionalSkill skillObj={el} key={el.id} />;
        })}
        {skills.additionalProfessionalSkills.size !== 0 && (
            <li className="professional-skills__additional">
              <div className="professional-skills__additional-header" onClick={() => skills.setMainAdditionalIsActive()}>
                <IcPlus />
                <span>добавить недостающее</span>
              </div>
              <div
                className="professional-skills__additional-body"
                aria-expanded={!skills.isMainAdditionalActive}
              >
                <ul className="professional-skills__additional-list">
                  {skills.professionalAdditionalSkillsList.map(skill => {
                    return (
                      <ProfessionalSkill skillObj={skill} key={skill.id} />
                    )
                  })}
                </ul>
              </div>
            </li>
          )}
      </ul>
    </div>
  );
});

export default ProfessionalSkillsList;
