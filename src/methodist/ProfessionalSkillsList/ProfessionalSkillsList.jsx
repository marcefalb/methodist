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
          <li>
            <button className="professional-skills__add-btn">
              <IcPlus />
              <span>добавить недостающее</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
});

export default ProfessionalSkillsList;
