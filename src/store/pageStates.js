import { makeAutoObservable } from "mobx";

class PageStates {
  constructor() {
    this.isProfessionSelected = false
    this.isContinueBtnVisible = false
    this.isContinueBtnClicked = false
    this.isFormed = false
    this.isNext = false
    this.isSend = false

    makeAutoObservable(this)
  }

  setPageState(state, booleanValue) {
    this[state] = booleanValue
  }
}

export default PageStates;