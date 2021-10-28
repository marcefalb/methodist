import React from "react";
import { ReactComponent as IcDropdownDown } from "../../../assets/icons/ic_dropdown-indicator_down.svg";
import { ReactComponent as IcDropdownTop } from "../../../assets/icons/ic_dropdown-indicator_top.svg";
import "./ProfessionalSkill.css";
import { observer } from "mobx-react-lite";
import skills from "../../../store/skills";

const ProfessionalSkill = observer(({ skillObj }) => {
  return (
    <li className="professional-skills__item">
      <div
        className="professional-skills__accordion-header"
        onClick={() => {
          skills.setIsActive(skillObj.id);
        }}
      >
        <div className="professional-skills__dropdown-indicator">
          {(skillObj.isActive && <IcDropdownTop />) || <IcDropdownDown />}
        </div>
        <span className="professional-skills__label">{skillObj.label}</span>
        <button
          className="professional-skills__btn"
          onClick={() => {
            skills.removeSkill(skillObj.id, skills.professionalSkills);
          }}
        >
          Удалить
        </button>
      </div>
      {skillObj.isActive && (
        <div className="professional-skills__accordion-body">
          <ul className="professional-skills__accordion-list">
            {skillObj.subskills.map((subskill) => {
              return (
                <li className="professional-skills__accordion-item">
                  <span>{subskill.label}</span>
                  <button
                    className="professional-skills__btn"
                    onClick={() => {
                      skills.removeProfessionalSkill(skillObj.id, subskill.id);
                    }}
                  >
                    Удалить
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
});

export default ProfessionalSkill;
