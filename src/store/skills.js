import {makeAutoObservable, observable, values} from "mobx";

class Skills {
  skillsList = observable.map()
  // demoSkills = [
  //   { id: '0', label: 'Работа в команде' },
  //   { id: '1', label: 'Ответственность' },
  //   { id: '2', label: 'Стрессоустойчивость' },
  //   { id: '3', label: 'Инициативность' },
  //   { id: '4', label: 'Коммуникабельность' },
  //   { id: '5', label: 'Аналитическое мышление' }
  // ]
  demoSkills = ['Работа в команде', 'Ответственность', 'Стрессоустойчивость', 'Инициативность', 'Коммуникабельность', 'Аналитическое мышление']
  inputValue = ''

  constructor() {
    makeAutoObservable(this)
  }

  addSkill(skill) {
    this.demoSkills.push(skill)
    this.inputValue = ''
  }

  delSkill(id) {
    this.demoSkills.splice(id)
  }

  setValue(value) {
    this.inputValue = value
  }

  get allSkills() {
    return values(this.skillsList)
  }
}

export default new Skills()