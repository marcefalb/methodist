import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../Button/Button";
import "./Modal.css";

const Modal = observer(({ header, label, onAcceptClick, onCancelClick }) => {
  return (
    <div className="modal">
      <div
        className="modal__container"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="modal__header">{header}</span>
        <p className="modal__text">
          Вы уверены, что хотите удалить предмет "{label}" ?
        </p>
        <div className="modal__btns">
          <Button
            text="Да"
            theme="default"
            fontSize="24px"
            width="200px"
            height="50px"
            borderRadius="10px"
            onClick={onAcceptClick}
          />
          <Button
            text="Нет"
            theme="outlined"
            fontSize="24px"
            width="200px"
            height="50px"
            borderRadius="10px"
            onClick={onCancelClick}
          />
        </div>
      </div>
    </div>
  );
});

export default Modal;
