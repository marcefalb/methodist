import React from "react";
import { observer } from "mobx-react-lite";

import EducationSlider from "./EducationSlider/EducationSlider";
import EducationInfo from "./EducationInfo/EducationInfo";
import Button from "components/Form/Button/Button";

import store from "store/store";

import "./EducationPlan.css";

const EducationPlan = observer(() => {
  const pageStates = store.pageStates
  const educationPlan = store.educationPlan
  const professionalSkillsList = store.skills.professionalSkillsList

  const sliderOnChange = (value) => {
    educationPlan.setCurrentSliderValue(value)
  }

  if (!pageStates.isSkillsSelected) return null
  return (
    <div className="education-plan">
      <span className="title">Подходящий план</span>
      <div className="education-plan__plan">
        <EducationSlider
          sliderValue={educationPlan.currentSliderValue}
          onChange={(value) => educationPlan.setCurrentSliderValue(value)}
        />
        <EducationInfo sliderValue={educationPlan.currentSliderValue}/>
      </div>
      <div className="education-plan__continue-btn">
        <Button
          text="Продолжить"
          theme="filled"
          size="normal"
          borderRadius="10px"
          onClick={() => pageStates.setPageState('isRequestFormed', true)}
        />
      </div>
    </div>
  );
});

export default EducationPlan;
