const { makeAutoObservable } = require("mobx");

class EducationPlan {
  currentSliderValue = 256

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentSliderValue(sliderValue) {
    this.currentSliderValue = sliderValue
  }
}

export default EducationPlan