import React from "react";
import { observer } from "mobx-react-lite";

import ProfessionalSkillsMap from "./SkillsMap/ProfessionalSkillsMap";

import "./ProfessionalSkillsList.css";
import AdditionalSkillsMap from "./SkillsMap/AdditionalSkillsMap";

const ProfessionalSkillsList = observer(() => {
  return (
    <div className="professional-skills">
      <span className="professional-skills__title title">
        Профессиональные компетенции
      </span>

      <div className="professional-skills__maps">
        <ProfessionalSkillsMap /> 
        <AdditionalSkillsMap />
      </div>
    </div>
  );
});

export default ProfessionalSkillsList;
