import { React, useState } from "react";
import { observer } from "mobx-react-lite";

import Button from "../Button/Button";
import "./Modal.css";

const Modal = observer(({ header, text, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="modal" onClick={() => handleClose()}>
      <div
        className="modal__container"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="modal__header">{header}</span>
        <p className="modal__text">{text}</p>
        <div className="modal__btns">
          <Button
            text="Да"
            theme="default"
            fontSize="24px"
            width="200px"
            height="50px"
            borderRadius="10px"
            onClick={onClick}
          />
          <Button
            text="Нет"
            theme="outlined"
            fontSize="24px"
            width="200px"
            height="50px"
            borderRadius="10px"
            onClick={() => {
              handleClose();
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default Modal;
