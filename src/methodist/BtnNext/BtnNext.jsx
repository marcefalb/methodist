import React from "react";
import { ReactComponent as IcArrowRight } from "../../assets/icons/ic_arrow-right.svg";
import "./BtnNext.css";
import store from "../../store/store";
import { observer } from "mobx-react-lite";

const BtnNext = observer(({ isShow }) => {
  return (
    <div className="btn-next__container">
      <button
        className={(isShow && "btn-corp btn-corp_active") || ("btn-corp")}
      >
        <IcArrowRight />
        <span>Корпоративный стандарт</span>
      </button>
      <button
        className={(isShow && "btn-next btn-next_active") || ("btn-next")}
        onClick={() => store.setIsContinue()}
      >
        <span>Сборка запроса самостоятельно</span>
        <IcArrowRight />
      </button>
    </div>
  );
});

export default BtnNext;
