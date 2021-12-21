import { makeAutoObservable } from "mobx";

class PageStates {
  isProfessionSelected = false
  isContinueBtnVisible = false
  isContinueBtnClicked = false
  isSkillsSelected = false
  isRequestFormed = false
  isFormSended = false

  constructor() {
    makeAutoObservable(this)
  }

  setPageState(state, booleanValue) {
    this[state] = booleanValue
  }
}

export default PageStates;