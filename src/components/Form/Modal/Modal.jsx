import React from 'react';
import { observer } from "mobx-react-lite";

import Button from "../Button/Button";
import './Modal.css'

const Modal = observer(({header, text, onClick}) => {

    return (
      <div className="modal">
        <div className="modal__container">
          <span className="modal__header">
            {header}
          </span>
          <p className="modal__text">
            {text}
          </p>
          <div className="modal__btns">
            <Button
              text="Да"
              theme="default"
              fontSize="24px"
              width="200px"
              height="50px"
              onClick={onClick}
            />
            <Button
              text="Нет"
              theme="outlined"
              fontSize="24px"
              width="200px"
              height="50px"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    )
})

export default Modal;