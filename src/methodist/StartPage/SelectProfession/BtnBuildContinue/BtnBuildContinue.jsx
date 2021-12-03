import React from "react";
import { observer } from "mobx-react-lite";
import {Link} from "react-router-dom"

import { ReactComponent as IcArrowRight } from "assets/icons/ic_arrow-right.svg";

import "./BtnBuildContinue.css";

const BtnNext = observer(({ onClick, state }) => {
  return (
    <div className={state ? "btn-next__container btn-next__container_active" : "btn-next__container"}>
      <Link
        className="btn-corp btn-next_active"
        to="/page"
      >
        <IcArrowRight />
        <span>Корпоративный стандарт</span>
      </Link>
      <button
        className="btn-next btn-next_active"
        onClick={onClick}
      >
        <span>Сборка запроса самостоятельно</span>
        <IcArrowRight />
      </button>
    </div>
  );
});

export default BtnNext;
