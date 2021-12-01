import {makeAutoObservable, observable, values} from "mobx";

import fetchProfessionalSubskills from "../API/fetchProfessionalSubskills";

class professionalSkill {
  id = 1
  label = ''
  isRecommended = true
  isActive = false
  additionalIsActive = false
  subskills = observable.map()
  subskillsId = observable.array()
  additionalSubskills = observable.map()
  
  constructor(skill) {
    makeAutoObservable(this)
    
    this.isRecommended = skill?.is_recommended
    this.id = skill?.id
    this.label = skill?.name
    this.fetchToProfessionalSubskills(skill.id)
  }

  
  async fetchToProfessionalSubskills(professionalSkillId) {
    const response = await fetchProfessionalSubskills.fetchToProfessionalSubskills(professionalSkillId)
    if (!response) return null
    response.data.professional_qualities.forEach(skill => {
      if (skill.is_recommended) {
        this.subskills.set(skill.id, skill)
        this.subskillsId.push(skill.id)
      }
      else this.additionalSubskills.set(skill.id, skill)
    })
  }

  setIsActive() {
    this.isActive = !this.isActive
  }
  
  setAdditionalIsActive() {
    this.additionalIsActive = !this.additionalIsActive
  }

  get subskillsList() {
    return values(this.subskills)
  }

  get additionalSubskillsList() {
    return values(this.additionalSubskills)
  }
}

export default professionalSkill;