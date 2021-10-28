import {makeAutoObservable, observable, values} from "mobx";
import fetchSpecialities from "../API/fetchSpecialities";

class Store {
  specialitiesSelect = observable.array()
  options = [
    { value: 'Designer', label: 'Дизайнер' },
    { value: 'Developer', label: 'Разработчик' },
    { value: 'Frontend-dev', label: 'Фронтенд разработчик' },
    { value: 'Backend-dev', label: 'Бэкенд разработчик' },
    { value: 'System administrator', label: 'Системный администратор' },
    { value: 'Analytic', label: 'Аналитик' }
  ]
  isContinue = false
  isShowBtn = false

  constructor() {
    makeAutoObservable(this)

    this.fetchToSpecialities()
  }

  async fetchToSpecialities() {
    const response = await fetchSpecialities.fetchToSpecialities()
    response.data.data.forEach(item => {
      this.specialitiesSelect.push(item)
    })
    console.log(this.specialitiesList)
  }

  setIsContinue() {
    this.isContinue = true
  }
  
  setIsShowBtn() {
    this.isShowBtn = true
  }

  get specialitiesList() {
    return values(this.specialitiesSelect)
  }
}

export default new Store()