import { makeAutoObservable } from "mobx";

class PageStates {
  constructor() {
    makeAutoObservable(this)

    this.isProfessionSelected = false
    this.isShowBtn = false
    this.isCompetencySelected = false
    this.isFormed = false
    this.isNext = false
    this.isSend = false
  }

  setPageState(pageState, booleanValue) {
    pageState = booleanValue
  }
}

export default PageStates;