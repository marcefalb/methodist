import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../../components/Form/Button/Button";
import EducationSlider from "./EducationSlider/EducationSlider";
import "./EducationPlan.css";
import store from "../../store/store";

const EducationPlan = observer(() => {
  return (
    <div className="education-plan">
      <span className="title">Подходящий план</span>
      <div className="education-plan__plan">
        <div className="education-plan__slider">
          <EducationSlider
            sliderValue={store.currentSliderValue}
            onChange={(value) => store.setCurrentSliderValue(value)}
          />
          <hr className="education-plan__line" />
        </div>
        <div className="education-plan__info">
          <div className="education-plan__hours">
            <div className="education-plan__hours_top">
              Ваши <span>{store.currentSliderValue * 6.2 !== 248 ? store.currentSliderValue * 6.2 : 256}</span> <p>&#8776; {store.currentSliderValue / 20} месяц(а)*</p>
            </div>
            <div className="education-plan__hours_bottom">включают в себя:</div>
          </div>
          <div className="education-plan__summary">
            <p>
              Подготовка индивидуального плана обучения на основе ваших желаемых
              часов
            </p>
            <ul className="education-plan__list">
              <li>Общепрофессиональный цикл</li>
              <li>Включение адаптационных дисциплин</li>
              <li>
                70 процентов от общего объема времени, отведенного на указанную
                дисциплину
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="education-plan__continue-btn">
        <Button
          text="Продолжить"
          theme="default"
          width="205px"
          height="50px"
          fontSize="24px"
          borderRadius="10px"
          onClick={() => store.setIsNext()}
        />
      </div>
    </div>
  );
});

export default EducationPlan;
