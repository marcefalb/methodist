import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../Button/Button";

import "./Modal.css";

const Modal = observer(
  ({
    header,
    label,
    isOpen,
    onAcceptClick,
    onCancelClick,
    onClick,
    isHelp,
  }) => {
    if (!isOpen) return null;
    return (
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div
          className="modal__container"
          onClick={(event) => event.stopPropagation()}
        >
          <span className="modal__header">{header}</span>
          <p className="modal__text">{label}</p>
          {(!isHelp && (
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
          )) || (
            <Button
              text="Понятно"
              theme="default"
              fontSize="24px"
              width="250px"
              height="50px"
              borderRadius="10px"
              onClick={onClick}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Modal;
