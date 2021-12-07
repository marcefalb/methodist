import React from "react";
import { observer } from "mobx-react-lite";

import ProfessionalSkillsMap from "./ProfessionalSkillsMap/ProfessionalSkillsMap";

import "./ProfessionalSkillsList.css";

const ProfessionalSkillsList = observer(() => {
  return (
    <div className="professional-skills">
      <span className="professional-skills__title title">
        Профессиональные компетенции
      </span>

      <div>
        <ProfessionalSkillsMap type="Default"/>
        <ProfessionalSkillsMap type="Additional"/>
      </div>
    </div>
  );
});

export default ProfessionalSkillsList;
