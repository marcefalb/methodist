import React from "react";
import { observer } from "mobx-react-lite";
import {Link} from "react-router-dom"

import { ReactComponent as IcArrowRight } from "assets/icons/ic_arrow-right.svg";
import "./BtnNext.css";
import store from "store/store";

const BtnNext = observer(({ isShow }) => {
  return (
    <div className="btn-next__container">
      <Link
        className={(isShow && "btn-corp btn-corp_active") || ("btn-corp")}
        to="/page"
      >
        <IcArrowRight />
        <span>Корпоративный стандарт</span>
      </Link>
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
