import {makeAutoObservable, observable, toJS} from "mobx";

import pageStates from "store/pageStates";
import selects from "store/selects";

class Store {
  currentSliderValue = 256

  constructor() {
    makeAutoObservable(this)

    this.pageStates = new pageStates()
    this.selects    = new selects()
  }

  setCurrentSliderValue(sliderValue) {
    this.currentSliderValue = sliderValue
  }
}

export default new Store()