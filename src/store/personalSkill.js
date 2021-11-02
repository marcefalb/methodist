import {makeAutoObservable, observable} from "mobx";

class personalSkill {
  id = 1
  label = ''
  isRecommended = false
  
  constructor(skill) {
    makeAutoObservable(this)

    this.id = skill.id
    this.label = skill.label
    this.isRecommended = skill.isRecommended
  }
}

export default personalSkill;