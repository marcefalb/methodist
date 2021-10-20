import {makeAutoObservable, observable, values} from "mobx";

class Store {
  selects = observable.map()
  options = [
    { value: 'Designer', label: 'Дизайнер' },
    { value: 'Developer', label: 'Разработчик' },
    { value: 'Frontend-dev', label: 'Фронтенд разработчик' },
    { value: 'Backend-dev', label: 'Бэкенд разработчик' },
    { value: 'System administrator', label: 'Системный администратор' },
    { value: 'Analytic', label: 'Аналитик' }
  ]
  isContinue = false

  constructor() {
    makeAutoObservable(this)
  }

  setIsContinue() {
    this.isContinue = true
  }

  get selectsList() {
    return values(this.selects)
  }
}

export default new Store()