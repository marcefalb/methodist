import React from 'react';
import './ProfessionalSkillsList.css'
import skills from "../../store/skills";
import ProfessionalSkill from "../../components/Form/ProfessionalSkill/ProfessionalSkill";

const ProfessionalSkillsList = () => {
  return (
    <div className="professional-skills">
      <span className="professional-skills__title title">Профессиональные качества</span>
      <ul className="professional-skills__list">
        {skills.professionalSkills.map(el => {
            return (
              <ProfessionalSkill skill={el} />
            )
          }
        )}
      </ul>
    </div>
  );
};

export default ProfessionalSkillsList;