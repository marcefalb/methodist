import {makeAutoObservable} from "mobx";

class professionalSubskill {
  id = 1
  label = 'Профессиональная компетенция'
  isActive = false
  isAdditional = false
  
  constructor(skill) {
    makeAutoObservable(this)

    this.id = skill?.id
    this.label = skill?.name
  }

  setIsActive() {
    this.isActive = !this.isActive
  }
}

export default professionalSubskill;