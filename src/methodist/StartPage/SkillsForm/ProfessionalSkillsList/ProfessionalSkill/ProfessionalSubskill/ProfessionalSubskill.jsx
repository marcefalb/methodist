import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcAlert } from "assets/icons/ic_alert.svg";
import Button from "components/Form/Button/Button";
import Modal from "components/Form/Modal/Modal";

import store from "store/store"

const ProfessionalSubskill = observer(({ subskill, isAdditional, toggleSubskill }, key) => {
  const professionalSkillsList = store.skills.professionalSkillsList
  const btnLabel = isAdditional ? "добавить" : "удалить"

  const [isOpen, setIsOpen] = useState(false);
  const acceptBtnOnClick = () => {
    document.documentElement.style.overflow = "auto";
    setIsOpen(false);
    subskill.isActive = false
    toggleSubskill()
    if (subskill.additionalIsActive) professionalSkillsList.setAdditionalIsActive(subskill.id);
  };
  const deleteBtnOnClick = () => {
    document.documentElement.style.overflow = "hidden"
    setIsOpen(true);
  };
  const cancelBtnOnClick = () => {
    document.documentElement.style.overflow = "auto"
    setIsOpen(false);
  };

  return (
    <li className="professional-skills__accordion-item" key={key}>
      <span>{subskill.name}</span>
      <Button
        text={isAdditional ? "Добавить" : "Удалить"}
        theme={isAdditional ? "filled" : "outlined"}
        size="small"
        onClick={() => deleteBtnOnClick()}
      />
      <Modal
        header={<IcAlert />}
        label={`Вы уверены, что хотите ${btnLabel} компетенцию ${subskill.label}`}
        isOpen={isOpen}
        onAcceptClick={() => acceptBtnOnClick()}
        onCancelClick={() => cancelBtnOnClick()}
      />
    </li>
  );
});

export default ProfessionalSubskill;
