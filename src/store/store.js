import {makeAutoObservable, observable, toJS} from "mobx";

import pageStates from "store/pageStates";
import selects from "store/selects";
import skills from "store/skills";

class Store {
  currentSliderValue = 256

  constructor() {
    this.pageStates = new pageStates()
    this.selects    = new selects()
    this.skills     = new skills()
    
    makeAutoObservable(this)
  }

  setCurrentSliderValue(sliderValue) {
    this.currentSliderValue = sliderValue
  }
}

export default new Store()