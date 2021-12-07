import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcDropdownTop } from "assets/icons/ic_dropdown-indicator_top.svg";
import { ReactComponent as IcAlert } from "assets/icons/ic_alert.svg";
import Button from "components/Form/Button/Button";
import Modal from "components/Form/Modal/Modal";
import AdditionalSkills from "../AdditionalSkill/AdditionalSkill";

import store from "store/store";

import "./ProfessionalSkill.css";
import ProfessionalSubskillsMap from "./ProfessionalSubskillsMap/ProfessionalSubskillsMap";

const ProfessionalSkill = observer(({ profSkill, isAdditional, isDemo }, key) => {
  const professionalSkillsList = store.skills.professionalSkillsList

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
    profSkill.isActive = false
    setIsOpen(false);
    professionalSkillsList.toggleSkill(profSkill.id, isAdditional)
    if (profSkill.additionalIsActive) professionalSkillsList.setAdditionalIsActive(profSkill.id);
  };

  return (
    <li className="professional-skills__item" key={key}>
      <div
        className="professional-skills__accordion-header"
        onClick={() => {
          professionalSkillsList.setIsActive(profSkill.id);
        }}
      >
        <div
          className="professional-skills__dropdown-indicator"
          aria-expanded={!profSkill.isActive}
        >
          <IcDropdownTop />
        </div>
        <span className="professional-skills__label">{profSkill.label}</span>
        {!isDemo && <Button
          text={isAdditional ? "Добавить" : "Удалить"}
          theme={isAdditional ? "default" : "outlined"}
          width="100px"
          height="25px"
          fontSize="16px"
          borderRadius="5px"
          onClick={(event) => deleteBtnOnClick(event)}
        />
        }
        {isOpen && (
          <Modal
            header={<IcAlert />}
            label={isAdditional ? "Вы уверены, что хотите добавить компетенцию \"" + profSkill.label + "\"?" : "Вы уверены, что хотите удалить компетенцию \"" + profSkill.label + "\"?"}
            onAcceptClick={() => acceptBtnOnClick()}
            onCancelClick={() => cancelBtnOnClick()}
          />
        )}
      </div>
      <div
        className="professional-skills__accordion-body"
        aria-expanded={!profSkill.isActive}
      >
        <ProfessionalSubskillsMap profSkill={profSkill} type="Default"/>
        <ProfessionalSubskillsMap profSkill={profSkill} type="Additional" />
      </div>
    </li>
  );
});

export default ProfessionalSkill;
