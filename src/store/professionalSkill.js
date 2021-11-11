import {makeAutoObservable, observable, values} from "mobx";

import fetchProfessionalSubskills from "../API/fetchProfessionalSubskills";

class professionalSkill {
  id = 1
  label = ''
  isActive = false
  subskills = observable.map()
  additionalSubskills = observable.map()
  
  constructor(skill) {
    makeAutoObservable(this)

    this.id = skill?.id
    this.label = skill?.name
    // console.log(skill.professional_qualities_group_id)
    this.fetchToProfessionalSubskills(skill.id)
  }

  
  async fetchToProfessionalSubskills(professionalSkillId) {
    const response = await fetchProfessionalSubskills.fetchToProfessionalSubskills(professionalSkillId)
    console.log(response.data.data)
    if (!response) return null
    response.data.data.forEach(skill => {
      this.subskills.set(skill.id, skill)
    })
  }

  setIsActive() {
    this.isActive = !this.isActive
  }

  get subskillsList() {
    return values(this.subskills)
  }

  get additionalSubskillsList() {
    return values(this.additionalSubskills)
  }
}

export default professionalSkill;