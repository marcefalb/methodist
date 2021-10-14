import {makeAutoObservable, observable, values} from "mobx";

class Store {
  selects = observable.map()
  options = observable.map()

  constructor() {
    makeAutoObservable(this)
  }

  get optionsList() {
    return values(this.options)
  }
}

export default new Store()