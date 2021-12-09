import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcDropdownTop } from "assets/icons/ic_dropdown-indicator_top.svg";
import { ReactComponent as IcAlert } from "assets/icons/ic_alert.svg";
import Button from "components/Form/Button/Button";
import Modal from "components/Form/Modal/Modal";
import ProfessionalSubskillsMap from "./SubskillsMap/ProfessionalSubskillsMap";
import AdditionalSubskillsMap from "./SubskillsMap/AdditionalSubskillsMap";

import store from "store/store";

import "./ProfessionalSkill.css";

const ProfessionalSkill = observer(({ profSkill, isAdditional, isDemo }, key) => {
  const professionalSkillsList = store.skills.professionalSkillsList
  const btnLabel = isAdditional ? "добавить" : "удалить"

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

  if (isDemo) return (
    <li className="professional-skills__item" key={key}>
      <div className="professional-skills__dropdown-indicator">
        <span className="professional-skills__label">{profSkill.label}</span>
      </div>
    </li>
  )
  return (
    <li className="professional-skills__item" key={key}>
      <div
        className="professional-skills__accordion-header"
        onClick={() => professionalSkillsList.setIsActive(profSkill.id)}
      >
        <div
          className="professional-skills__dropdown-indicator"
          aria-expanded={!profSkill.isActive}
        >
          {!isAdditional && !isDemo && (<IcDropdownTop />)}
        </div>
        <span className="professional-skills__label">{profSkill.label}</span>

        {!isDemo && (<Button
          text={isAdditional ? "Добавить" : "Удалить"}
          theme={isAdditional ? "filled" : "outlined"}
          size="small"
          onClick={(event) => deleteBtnOnClick(event)}
        />)}

        <Modal
          isOpen={isOpen}
          header={<IcAlert />}
          label={`Вы уверены, что хотите ${btnLabel} компетенцию "${profSkill.label}"`}
          onAcceptClick={() => acceptBtnOnClick()}
          onCancelClick={() => cancelBtnOnClick()}
        />
      </div>
      <div
        className="professional-skills__accordion-body"
        aria-expanded={!profSkill.isActive}
      >
        <ProfessionalSubskillsMap profSkill={profSkill} isAdditional={false} />
        <AdditionalSubskillsMap profSkill={profSkill} isAdditional={true} />
      </div>
    </li>
  );
});

export default ProfessionalSkill;
