import {makeAutoObservable, observable} from "mobx";

class Skills {
  // professionalSkills = observable.array()
  // personalSkills = observable.array()
  demoSkills = observable.array([
    { id: '0', label: 'Работа в команде' },
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
  inputValue = ''
  nextObjId = 0

  constructor() {
    makeAutoObservable(this)
  }

  addSkill(skill, event) {
    if ((event.key === 'Enter' || event.type === 'click') && skill) {
      this.nextObjId = this.demoSkills.length + 1
      this.demoSkills.push({id: this.nextObjId, label: skill})
      this.inputValue = ''
    }
  }

  removeSkill(skillId) {
    this.demoSkills.forEach(skill => {
      if (skill.id === skillId)
        this.demoSkills.remove(skill)
    })
  }

  setValue(value) {
    this.inputValue = value
  }
}

export default new Skills()