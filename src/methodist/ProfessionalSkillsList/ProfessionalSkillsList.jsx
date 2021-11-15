import React from "react";
import { observer } from "mobx-react-lite";

import skills from "../../store/skills";
import ProfessionalSkill from "../../components/Form/ProfessionalSkill/ProfessionalSkill";
import AdditionalSkills from "../../components/Form/Additional/Additional";
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
          <AdditionalSkills
            arrayMap={skills.professionalAdditionalSkillsList}
          />
        )}
      </ul>
    </div>
  );
});

export default ProfessionalSkillsList;
