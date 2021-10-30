import React from 'react';
import {observer} from "mobx-react-lite";

import { ReactComponent as IcPlus } from "../../assets/icons/ic_plus.svg";
import ProfessionalSkill from "../../components/Form/ProfessionalSkill/ProfessionalSkill";
import skills from "../../store/skills";
import './ProfessionalSkillsList.css'

const ProfessionalSkillsList = observer(() => {
  return (
    <div className="professional-skills">
      <span className="professional-skills__title title">Профессиональные качества</span>
      <ul className="professional-skills__list">
        {skills.professionalSkills.map(el => {
            return (
              <ProfessionalSkill skillObj={el} />
            )
          }
        )}
        <li>
          <button className="professional-skills__add-btn">
            <IcPlus />
            <span>добавить еще</span>
          </button>
        </li>
      </ul>
    </div>
  );
});

export default ProfessionalSkillsList;