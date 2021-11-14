import {makeAutoObservable, observable, values} from "mobx";

import fetchPersonalSkills from "../API/fetchPersonalSkills";
import fetchProfessionalSkills from "../API/fetchProfessionalSkills";
import professionalSkill from './professionalSkill'

class Skills {
  personalSkills = observable.map()
  selectedPersonalSkills = observable.map()
  professionalSkills = observable.map()
  additionalProfessionalSkills = observable.map()
  isMainAdditionalActive = false
  currentOption = null

  constructor() {
    makeAutoObservable(this)

    this.fetchToPersonalSkills()
  }

  async fetchToPersonalSkills() {
    const response = await fetchPersonalSkills.fetchToPersonalSkills()
    if (!response) return null
    response.data.personal_qualities.forEach(skill => {
      this.personalSkills.set(skill.id, skill)
    })
  }

  async fetchToProfessionalSkills(directionId) {
    const response = await fetchProfessionalSkills.fetchToProfessionalSkills(directionId)
    if (!response) return null
    response.data.professional_qualities_groups.forEach(skill => {
      const skillItem = new professionalSkill(skill)
      this.professionalSkills.set(skill.id, skillItem)
    })
  }

  toggleSkill(skillId, arrayFrom, arrayTo) {
    arrayFrom.forEach(skillItem => {
      if (skillItem.id === skillId) {
        arrayTo.set(skillItem.id, skillItem)
        arrayFrom.delete(skillItem.id)
      }
    })
  }

  removeProfessionalSkill(skillId) {
    this.professionalSkills.forEach(skill => {
      if (skillId === skill.id) 
        this.professionalSkills.delete(skill.id)
    })
  }

  removeProfessionalSubskill(parentSkillId, skillId) {
    this.professionalSkills.forEach(parentSkill => {
      if (parentSkillId === parentSkill.id)
        parentSkill.subskills.forEach(skill => {
          if (skillId === skill.id)
            parentSkill.subskills.remove(skill)
        })
    })
  }

  setIsActive(skillObjId) {
    this.professionalSkills.forEach(skill => {
      if (skill.id === skillObjId)
        skill.setIsActive()
    })
  }
  
  setAdditionalIsActive(skillObjId) {
    this.professionalSkills.forEach(skill => {
      if (skill.id === skillObjId)
        skill.setAdditionalIsActive()
    })
  }

  setMainAdditionalIsActive() {
    this.isMainAdditionalActive = !this.isMainAdditionalActive
  }

  setCurrentOption(option) {
    this.currentOption = option
  }
  
  get selectedPersonalSkillsList() {
    return values(this.selectedPersonalSkills)
  }
  
  get personalSkillsList() {
    return values(this.personalSkills)
  }
  
  get professionalSkillsList() {
    return values(this.professionalSkills)
  }

  get professionalAdditionalSkillsList() {
    return values(this.additionalProfessionalSkills)
  }
}

export default new Skills()