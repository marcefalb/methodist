import {makeAutoObservable, observable, values} from "mobx";

import fetchProfessionalSubskills from "API/fetchProfessionalSubskills";

class professionalSkill {  
  constructor(skill) {
    this.subskills = observable.map()
    this.additionalSubskills = observable.map()

    this.id = skill?.id
    this.label = skill?.name
    this.isActive = false
    this.additionalIsActive = false

    this.fetchToProfessionalSubskills(skill.id)

    makeAutoObservable(this)
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