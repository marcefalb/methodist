import { makeAutoObservable } from "mobx";

class PageStates {
  constructor() {
    makeAutoObservable(this)

    this.isProfessionSelected = false
    this.isCompetencySelected = false
    this.isShowBtn = false
    this.isFormed = false
    this.isNext = false
    this.isSend = false
  }

  setPageState(state, booleanValue) {
    this[state] = booleanValue
  }
}

export default PageStates;