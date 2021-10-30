import {makeAutoObservable, observable} from "mobx";

class Skills {
  recommendedPersonalSkills = observable.array([
    { id: '0', name: 'Работа в команде' },
    { id: '1', label: 'Ответственность' },
    { id: '2', label: 'Стрессоустойчивость' },
    { id: '3', label: 'Инициативность' },
    { id: '4', label: 'Коммуникабельность' },
    { id: '5', label: 'Аналитическое мышление' },
    { id: '6', label: 'Организаторские способности' },
    { id: '7', label: 'Дисциплинированность' },
    { id: '8', label: 'Аккуратность' },
    { id: '9', label: 'Работа в условиях многозадачности' }
  ])
  selectedPersonalSkills = observable.array()
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

  constructor() {
    makeAutoObservable(this)
  }

  addSkill(skill, event, skillsArray) {
    if ((event.key === 'Enter' || event.type === 'click') && skill) {
      skillsArray.push({id: skillsArray.length + 1, label: skill})
      this.inputValue = ''
    }
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

  toggleSkill(skillId, skill, skillType, event) {
    if (skillType === 'recommended') {
      this.addSkill(skill, event, this.selectedPersonalSkills)
      this.removeSkill(skillId, this.recommendedPersonalSkills)
    }
    else {
      this.addSkill(skill, event, this.recommendedPersonalSkills)
      this.removeSkill(skillId, this.selectedPersonalSkills)
    }
  }

  setIsActive(skillObjId) {
    this.professionalSkills.forEach(skill => {
      if (skill.id === skillObjId)
        skill.isActive = !skill.isActive
    })
  }

  setValue(value) {
    this.inputValue = value
  }
}

export default new Skills()