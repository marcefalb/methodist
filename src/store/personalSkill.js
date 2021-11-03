import {makeAutoObservable} from "mobx";

class personalSkill {
  id = 1
  label = ''
  
  constructor(skill) {
    makeAutoObservable(this)

    this.id = skill.id
    this.label = skill.name
  }
}

export default personalSkill;