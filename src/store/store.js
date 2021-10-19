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

  constructor() {
    makeAutoObservable(this)
  }

  get selectsList() {
    return values(this.selects)
  }

  toContinue() {

  }
}

export default new Store()