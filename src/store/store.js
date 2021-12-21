import {makeAutoObservable} from "mobx";

import pageStates from "store/pageStates";
import selects from "store/selects";
import skills from "store/skills";
import educationPlan from "store/educationPlan";

class Store {
  constructor() {
    this.pageStates    = new pageStates()
    this.selects       = new selects()
    this.skills        = new skills()
    this.educationPlan = new educationPlan()
    
    makeAutoObservable(this)
  }
}

export default new Store()