import {makeAutoObservable, observable, toJS} from "mobx";

import pageStates from "store/pageStates";
import selects from "store/selects";

class Store {
  currentSliderValue = 256

  constructor() {
    this.pageStates = new pageStates()
    this.selects    = new selects()
    
    makeAutoObservable(this)
  }

  setCurrentSliderValue(sliderValue) {
    this.currentSliderValue = sliderValue
  }
}

export default new Store()