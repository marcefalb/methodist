import {makeAutoObservable, observable, values} from "mobx";

import fetchProfessionalSubskills from "API/fetchProfessionalSubskills";

class professionalSkill {  
  subskills = observable.map()
  additionalSubskills = observable.map()
  isDemo = false
  isActive = false
  additionalIsActive = false

  constructor(skill, isDemo) {
    this.id = skill?.id
    this.label = skill?.name
    this.isDemo = isDemo

    this.fetchToProfessionalSubskills(skill.id)

    makeAutoObservable(this)
  }

  async fetchToProfessionalSubskills(professionalSkillId) {
    const response = await fetchProfessionalSubskills.fetchToProfessionalSubskills(professionalSkillId)
    if (!response) return null
    response.data.professional_qualities.forEach(skill => {
      if (skill.is_recommended) this.subskills.set(skill.id, skill)
      else this.additionalSubskills.set(skill.id, skill)
    })
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