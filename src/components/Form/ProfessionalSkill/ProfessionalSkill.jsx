import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcDropdownTop } from "../../../assets/icons/ic_dropdown-indicator_top.svg";
import { ReactComponent as IcPlus } from "../../../assets/icons/ic_plus.svg";
import { ReactComponent as IcAlert } from "../../../assets/icons/ic_alert.svg";
import "./ProfessionalSkill.css";
import "../Modal/Modal";
import skills from "../../../store/skills";
import ProfessionalSubskill from "./ProfessionalSubskill/ProfessionalSubskill";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ProfessionalSkill = observer(({ skillObj }) => {
  const [isOpen, setIsOpen] = useState(false);
  const deleteBtnOnClick = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <li className="professional-skills__item">
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
          text="Удалить"
          theme="outlined"
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
            onAcceptClick={() => {
              skills.removeProfessionalSkill(skillObj.id, skills.professionalSkills);
            }}
            onCancelClick={() => {
              setIsOpen(false);
            }}
          />
        )}
      </div>
      <div
        className="professional-skills__accordion-body"
        aria-expanded={!skillObj.isActive}
      >
        <ul className="professional-skills__accordion-list">
          {skillObj.subskills && skillObj.subskillsList.map((subskill) => {
            return (
              <ProfessionalSubskill
                subskill={subskill}
                onAcceptClick={skills.removeProfessionalSkill(
                  skillObj.id,
                  subskill.id
                )}
              />
            );
          })}
          <li className="professional-skills__additional">
            <div className="professional-skills__additional-header">
              <IcPlus />
              <span>добавить недостающее</span>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
});

export default ProfessionalSkill;
