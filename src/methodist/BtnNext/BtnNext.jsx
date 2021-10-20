import React from 'react';
import {ReactComponent as IcArrowRight} from "../../assets/icons/ic_arrow-right.svg";
import './BtnNext.css'
import store from "../../store/store";

const BtnNext = () => {
  return (
    <div className='btn-next__container'>
      <button className="btn-next" onClick={() => store.setIsContinue()}>
        <span>Далее</span>
        <IcArrowRight />
      </button>
    </div>
  );
};

export default BtnNext;