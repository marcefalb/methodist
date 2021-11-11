import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcAlert } from "../../../../assets/icons/ic_alert.svg";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";

const ProfessionalSubskill = observer(({ subskill, onAcceptClick }, key) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="professional-skills__accordion-item" key={key}>
      <span>{subskill.name}</span>
      <Button
        text="Удалить"
        theme="outlined"
        width="100px"
        height="25px"
        fontSize="16px"
        borderRadius="5px"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <Modal
          header={<IcAlert />}
          label={subskill.name}
          onAcceptClick={onAcceptClick}
          onCancelClick={() => setIsOpen(false)}
        />
      )}
    </li>
  );
});

export default ProfessionalSubskill;
