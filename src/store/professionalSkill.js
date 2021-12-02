import {makeAutoObservable, observable, values} from "mobx";

class professionalSkill {
  id = 1
  label = ''
  isRecommended = true
  isActive = false
  additionalIsActive = false
  subskills = observable.map()
  additionalSubskills = observable.map()
  
  constructor(skill, subskills) {
    
    this.isRecommended = skill?.is_recommended
    this.id = skill?.id
    this.label = skill?.name
    this.setSubskills(subskills)

    makeAutoObservable(this)
  }

  setIsActive() {
    this.isActive = !this.isActive
  }
  
  setAdditionalIsActive() {
    this.additionalIsActive = !this.additionalIsActive
  }

  setSubskills(subskills) {
    subskills.forEach(subskill => {
      if (subskill.is_recommended) {
        this.subskills.set(subskill.id, subskill)
      }
      else {
        this.additionalSubskills.set(subskill.id, subskill)
      }
    })
  }

  get subskillsList() {
    return values(this.subskills)
  }

  get additionalSubskillsList() {
    return values(this.additionalSubskills)
  }
}

export default professionalSkill;