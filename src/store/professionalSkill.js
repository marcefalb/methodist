import {makeAutoObservable, observable} from "mobx";

class professionalSkill {
  id = 1
  label = ''
  isActive = false
  subskills = observable.map()
  additionalSubskills = observable.map()
  
  constructor(skill) {
    makeAutoObservable(this)

    this.id = skill.id
    this.label = skill.label
    this.subskills = skill.subskills
    this.additionalSubskills = skill.additionalSubskills
  }

  setIsActive() {
    this.isActive = !this.isActive
  }
}

export default professionalSkill;