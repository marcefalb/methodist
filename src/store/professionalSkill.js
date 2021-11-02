import {makeAutoObservable, observable} from "mobx";

class professionalSkill {
  id = 1
  label = ''
  isActive = false
  subskills = observable.array()
  
  constructor(skill) {
    makeAutoObservable(this)

    this.id = skill.id
    this.label = skill.label
    this.isRecommended = skill.isRecommended
    this.subskills = skill.subskills
  }
}

export default professionalSkill;