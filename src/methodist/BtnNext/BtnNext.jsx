import React from 'react';
import {ReactComponent as IcArrowRight} from "../../assets/icons/ic_arrow-right.svg";
import './BtnNext.css'

const BtnNext = () => {
  return (
    <div className="btn-next__container">
      <button className="btn-next">
        <span>Далее</span>
        <IcArrowRight />
      </button>
    </div>
  );
};

export default BtnNext;