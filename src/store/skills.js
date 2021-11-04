import {makeAutoObservable, observable, values} from "mobx";

import fetchPersonalSkills from "../API/fetchPersonalSkills";
import fetchProfessionalSkills from "../API/fetchProfessionalSkills";
import professionalSkill from './professionalSkill'

class Skills {
  personalSkills = observable.map()
  selectedPersonalSkills = observable.map()
  professionalSkills = observable.array([
    { id: '1', label: 'Технология металлобработки на токарных станках', isActive: false, subskills: [
        { id: '1', label: 'Точение по наружному диаметру: черной и чистовой проход' },
        { id: '2', label: 'Образование канавок различной формы и глубины' },
        { id: '3', label: 'Точение, подрезка торцевой поверхности, а также отрезная операция' },
      ] },
    { id: '2', label: 'Технология работ на токарно-револьверных станках', isActive: false, subskills: [
        { id: '1', label: 'Точение по наружному диаметру: черной и чистовой проход' },
        { id: '2', label: 'Образование канавок различной формы и глубины' },
        { id: '3', label: 'Точение, подрезка торцевой поверхности, а также отрезная операция' },
      ] },
    { id: '3', label: 'Токарная обработка заготовок, деталей, изделий и инструментов', isActive: false, subskills: [
        { id: '1', label: 'Точение по наружному диаметру: черной и чистовой проход' },
        { id: '2', label: 'Образование канавок различной формы и глубины' },
        { id: '3', label: 'Точение, подрезка торцевой поверхности, а также отрезная операция' },
      ] },
    { id: '4', label: 'Способы установки деталей', isActive: false, subskills: [
        { id: '1', label: 'Точение по наружному диаметру: черной и чистовой проход' },
        { id: '2', label: 'Образование канавок различной формы и глубины' },
        { id: '3', label: 'Точение, подрезка торцевой поверхности, а также отрезная операция' },
      ] },
  ])
  currentOption = null

  constructor() {
    makeAutoObservable(this)

    this.fetchToPersonalSkills()
  }

  async fetchToPersonalSkills() {
    const response = await fetchPersonalSkills.fetchToPersonalSkills()
    if (!response) return null
    response.data.data.forEach(skill => {
      // const skillItem = new personalSkill(skill)
        this.personalSkills.set(skill.id, skill)
    })
  }

  async fetchToProfessionalSkills() {
    const response = await fetchProfessionalSkills.fetchToProfessionalSkills()
    if (!response) return null
    response.data.data.forEach(skill => {
      const skillItem = new professionalSkill(skill)
      this.professionalSkills.set(skill.id, skillItem)
    })
  }

  togglePersonalSkill(skillId, arrayFrom, arrayTo) {
    arrayFrom.forEach(skillItem => {
      if (skillItem.id === skillId) {
        arrayTo.set(skillItem.id, skillItem)
        arrayFrom.delete(skillItem.id)
      }
    })
  }

  // removeSkill(skill, array) {
  //   array.forEach(item => {
  //     if (item.id === skill.id)
  //       array.remove(item)
  //   })
  // }

  removeProfessionalSkill(parentSkillId, skillId) {
    this.professionalSkills.forEach(parentSkill => {
      if (parentSkillId === parentSkill.id)
        parentSkill.subskills.forEach(skill => {
          if (skillId === skill.id)
            parentSkill.subskills.remove(skill)
        })
    })
  }

  // toggleSkill(skillId, skill, skillType) {
  //   if (skillType === 'recommended') {
  //     this.addSkill(skill, this.selectedPersonalSkills)
  //     this.removeSkill(skillId, this.recommendedPersonalSkills)
  //   }
  //   else {
  //     this.addSkill(skill, this.recommendedPersonalSkills)
  //     this.removeSkill(skillId, this.selectedPersonalSkills)
  //   }
  // }

  setIsActive(skillObjId) {
    this.professionalSkills.forEach(skill => {
      if (skill.id === skillObjId)
        skill.isActive = !skill.isActive
    })
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
}

export default new Skills()