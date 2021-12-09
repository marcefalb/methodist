import React from 'react';
import { observer } from 'mobx-react-lite';

const EducationInfo = observer(({sliderValue}) => {
  return (
    <div className="education-plan__info">
      <div className="education-plan__hours">
        <div className="education-plan__hours_top">
          Ваши <span>{sliderValue} ч.</span> <p>&#8776; {Math.round(sliderValue / 124)} месяц(а)*</p>
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
  )
});

export default EducationInfo