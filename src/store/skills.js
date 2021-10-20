import {makeAutoObservable, observable} from "mobx";

class Skills {
  skillsList = observable.map()
  demoSkills = observable.array([
    { id: '0', label: 'Работа в команде' },
    { id: '1', label: 'Ответственность' },
    { id: '2', label: 'Стрессоустойчивость' },
    { id: '3', label: 'Инициативность' },
    { id: '4', label: 'Коммуникабельность' },
    { id: '5', label: 'Аналитическое мышление' }
  ])
  inputValue = ''
  nextObjId = 0

  constructor() {
    makeAutoObservable(this)
  }


  addSkill(skill) {
    this.nextObjId = this.demoSkills.length + 1
    this.demoSkills.push({id: this.nextObjId, label: skill})
    this.inputValue = ''
  }

  delSkill(skillId) {
    this.demoSkills.remove(skillId)
  }

  setValue(value) {
    this.inputValue = value
  }

  // get allSkills() {
  //   return values(this.demoSkills)
  // }
}

export default new Skills()