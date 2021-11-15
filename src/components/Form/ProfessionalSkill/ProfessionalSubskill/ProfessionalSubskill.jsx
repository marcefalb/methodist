import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcAlert } from "../../../../assets/icons/ic_alert.svg";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";

const ProfessionalSubskill = observer(({ subskill, onAcceptClick, isAdditional }, key) => {
  const [isOpen, setIsOpen] = useState(false);
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
        text={isAdditional ? "Удалить" : "Добавить"}
        theme={isAdditional ? "outlined" : "default"}
        width="100px"
        height="25px"
        fontSize="16px"
        borderRadius="5px"
        onClick={() => {
          deleteBtnOnClick()
        }}
      />
      {isOpen && (
        <Modal
          header={<IcAlert />}
          label={subskill.name}
          onAcceptClick={onAcceptClick}
          onCancelClick={() => cancelBtnOnClick()}
        />
      )}
    </li>
  );
});

export default ProfessionalSubskill;
