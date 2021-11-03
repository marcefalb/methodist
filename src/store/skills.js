import {makeAutoObservable, observable, toJS} from "mobx";

import fetchPersonalSkills from "../API/fetchPersonalSkills";
import fetchProfessionalSkills from "../API/fetchProfessionalSkills";
import personalSkill from './personalSkill'
import professionalSkill from './professionalSkill'

class Skills {
  recommendedPersonalSkills = observable.array([
    { id: '0', label: 'Работа в команде', isRecommended: true },
    { id: '1', label: 'Ответственность', isRecommended: true },
    { id: '2', label: 'Стрессоустойчивость', isRecommended: true },
    { id: '3', label: 'Инициативность', isRecommended: true },
    { id: '4', label: 'Коммуникабельность', isRecommended: true },
    { id: '5', label: 'Аналитическое мышление', isRecommended: true },
    { id: '6', label: 'Организаторские способности', isRecommended: true },
    { id: '7', label: 'Дисциплинированность', isRecommended: true },
    { id: '9', label: 'Работа в условиях многозадачности', isRecommended: true }
  ])
  selectedPersonalSkills = observable.array()
  personalSkills = observable.array(
    { id: '0', label: 'Аккуратность', isRecommended: false },
    { id: '1', label: 'Отзывчивость', isRecommended: false },
    { id: '2', label: 'Пунктуальность', isRecommended: false },
    { id: '3', label: 'Самокритичность', isRecommended: false },
    { id: '4', label: 'Трудолюбие', isRecommended: false },
    { id: '5', label: 'Уверенность в себе', isRecommended: false },
    { id: '6', label: 'Упорство', isRecommended: false },
    { id: '7', label: 'Терпеливость', isRecommended: false },
    { id: '8', label: 'Рассудительность', isRecommended: false },
    { id: '9', label: 'Целеустремленность', isRecommended: false }
  )
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
  defaultValue = ''

  constructor() {
    makeAutoObservable(this)

    this.defaultValue = this.personalSkills[0]
    // this.fetchToPersonalSkills()
  }

  async fetchToPersonalSkills() {
    const response = await fetchPersonalSkills.fetchToPersonalSkills()
    console.log(response)
    if (!response) return null
    response.data.data.forEach(skill => {
      const skillItem = new personalSkill(skill)
      skill.isRecommended ? 
        this.recommendedPersonalSkills.set(skill.id, skillItem) :
        this.personalSkills.set(skill.id, skillItem)
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

  addSkill(skill, skillsArray) {
    skillsArray.push({id: skillsArray.length + 1, label: skill})
  }

  removeSkill(skillId, skillsArray) {
    skillsArray.forEach(skill => {
      if (skill.id === skillId)
        skillsArray.remove(skill)
    })
  }

  removeProfessionalSkill(parentSkillId, skillId) {
    this.professionalSkills.forEach(parentSkill => {
      if (parentSkillId === parentSkill.id)
        parentSkill.subskills.forEach(skill => {
          if (skillId === skill.id)
            parentSkill.subskills.remove(skill)
        })
    })
  }

  toggleSkill(skillId, skill, skillType) {
    if (skillType === 'recommended') {
      this.addSkill(skill, this.selectedPersonalSkills)
      this.removeSkill(skillId, this.recommendedPersonalSkills)
    }
    else {
      this.addSkill(skill, this.recommendedPersonalSkills)
      this.removeSkill(skillId, this.selectedPersonalSkills)
    }
  }

  setIsActive(skillObjId) {
    this.professionalSkills.forEach(skill => {
      if (skill.id === skillObjId)
        skill.isActive = !skill.isActive
    })
  }

  resetDefaultValue() {
    this.defaultValue = null
  }

  setValue(value) {
    this.inputValue = value
  }

  get personalSkillsList() {
    return toJS(this.personalSkills)
  }
}

export default new Skills()