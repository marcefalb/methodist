import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcDropdownTop } from "../../../assets/icons/ic_dropdown-indicator_top.svg";
import { ReactComponent as IcAlert } from "../../../assets/icons/ic_alert.svg";
import "./ProfessionalSkill.css";
import "../Modal/Modal";
import skills from "../../../store/skills";
import ProfessionalSubskill from "./ProfessionalSubskill/ProfessionalSubskill";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import AdditionalSkills from "../Additional/Additional";

const ProfessionalSkill = observer(({ skillObj, isAdditional }, key) => {
  const [isOpen, setIsOpen] = useState(false);
  const deleteBtnOnClick = (event) => {
    event.stopPropagation();
    document.documentElement.style.overflow = "hidden";
    setIsOpen(true);
  };
  const cancelBtnOnClick = () => {
    document.documentElement.style.overflow = "auto";
    setIsOpen(false);
  };
  const acceptBtnOnClick = () => {
    document.documentElement.style.overflow = "auto";
    setIsOpen(false);
    skills.toggleSkill(
      skillObj.id,
      skills.professionalSkills,
      skills.additionalProfessionalSkills
    );
    if (skillObj.additionalIsActive) skills.setAdditionalIsActive(skillObj.id);
  };

  return (
    <li className="professional-skills__item" key={key}>
      <div
        className="professional-skills__accordion-header"
        onClick={() => {
          skills.setIsActive(skillObj.id);
        }}
      >
        <div
          className="professional-skills__dropdown-indicator"
          aria-expanded={!skillObj.isActive}
        >
          <IcDropdownTop />
        </div>
        <span className="professional-skills__label">{skillObj.label}</span>
        <Button
          text={isAdditional ? "Добавить" : "Удалить"}
          theme={isAdditional ? "default" : "outlined"}
          width="100px"
          height="25px"
          fontSize="16px"
          borderRadius="5px"
          onClick={(event) => deleteBtnOnClick(event)}
        />
        {isOpen && (
          <Modal
            header={<IcAlert />}
            label={skillObj.label}
            onAcceptClick={() => acceptBtnOnClick()}
            onCancelClick={() => cancelBtnOnClick()}
          />
        )}
      </div>
      <div
        className="professional-skills__accordion-body"
        aria-expanded={!skillObj.isActive}
      >
        <ul className="professional-skills__accordion-list">
          {(skillObj.subskills.size !== 0 &&
            skillObj.subskillsList.map((subskill) => {
              return (
                <ProfessionalSubskill
                  subskill={subskill}
                  onAcceptClick={() => {
                    document.documentElement.style.overflow = "auto";
                    skills.toggleSkill(
                      subskill.id,
                      skillObj.subskills,
                      skillObj.additionalSubskills
                    );
                  }}
                  key={subskill.id}
                />
              );
            })) || (
            <li className="professional-skills__accordion-item">
              <span>Компетенции отсутствуют</span>
            </li>
          )}
          {skillObj.additionalSubskills.size !== 0 && (
            <AdditionalSkills
              ariaExpanded={skillObj.additionalIsActive}
              arrayMap={skillObj.additionalSubskillsList}
              setIsActiveFunc={skills.setAdditionalIsActive(skillObj.id)}
              parentSkill={skillObj}
            />
          )}
        </ul>
      </div>
    </li>
  );
});

export default ProfessionalSkill;
