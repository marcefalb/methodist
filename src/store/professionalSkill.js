import {makeAutoObservable, observable, values} from "mobx";

import fetchProfessionalSubskills from "../API/fetchProfessionalSubskills";

class professionalSkill {
  id = 1
  label = ''
  isActive = false
  additionalIsActive = false
  subskills = observable.map()
  additionalSubskills = observable.map()
  
  constructor(skill) {
    makeAutoObservable(this)

    this.id = skill?.id
    this.label = skill?.name
    this.fetchToProfessionalSubskills(skill.id)
  }

  
  async fetchToProfessionalSubskills(professionalSkillId) {
    const response = await fetchProfessionalSubskills.fetchToProfessionalSubskills(professionalSkillId)
    if (!response) return null
    response.data.professional_qualities.forEach(skill => {
      this.subskills.set(skill.id, skill)
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