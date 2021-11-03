import React from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcDropdownDown } from "../../../assets/icons/ic_dropdown-indicator_down.svg";
import { ReactComponent as IcDropdownTop } from "../../../assets/icons/ic_dropdown-indicator_top.svg";
import { ReactComponent as IcPlus } from "../../../assets/icons/ic_plus.svg";
import { ReactComponent as IcAlert } from "../../../assets/icons/ic_alert.svg";
import "./ProfessionalSkill.css";
import "../Modal/Modal"
import skills from "../../../store/skills";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

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
        <Button
          text="Удалить"
          theme="outlined"
          width="100px"
          height="25px"
          fontSize="16px"
          borderRadius="5px"
          // onClick={Modal.handleOpen}
        />
        <Modal 
          header={<IcAlert/>} 
          text={'Вы уверены, что хотите удалить предмет "' + skillObj.label + '"?'}
          onClick={() => {
            skills.removeSkill(skillObj.id, skills.professionalSkills);
          }} 
        />
      </div>
      <div className="professional-skills__accordion-body" aria-expanded={!skillObj.isActive}>
        <ul className="professional-skills__accordion-list">
          {skillObj.subskills.map((subskill) => {
            return (
              <li className="professional-skills__accordion-item">
                <span>{subskill.label}</span>
                <Button
                  text="Удалить"
                  theme="outlined"
                  width="100px"
                  height="25px"
                  fontSize="16px"
                  borderRadius="5px"
                  // onClick={Modal.handleOpen}
                />
                <Modal 
                  header={<IcAlert/>} 
                  text={'Вы уверены, что хотите удалить предмет "' + skillObj.label + '"?'}
                  onClick={() => {
                    skills.removeProfessionalSkill(skillObj.id, subskill.id);
                  }} 
                />
              </li>
            );
          })}
          <li>
            <button className="professional-skills__add-btn">
              <IcPlus />
              <span>добавить еще</span>
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
});

export default ProfessionalSkill;
