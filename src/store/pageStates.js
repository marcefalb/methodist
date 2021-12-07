import { makeAutoObservable } from "mobx";

class PageStates {
  isProfessionSelected = false
  isContinueBtnVisible = false
  isContinueBtnClicked = false
  isFormed = false
  isNext = false
  isSend = false

  constructor() {
    makeAutoObservable(this)
  }

  setPageState(state, booleanValue) {
    this[state] = booleanValue
  }
}

export default PageStates;