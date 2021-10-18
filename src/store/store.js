import {makeAutoObservable, observable, values} from "mobx";

class Store {
  selects = observable.map()

  constructor() {
    makeAutoObservable(this)
  }

  get selectsList() {
    return values(this.selects)
  }
}

export default new Store()