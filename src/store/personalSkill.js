import {makeAutoObservable, observable} from "mobx";

class personalSkill {
  
  
  constructor() {
    makeAutoObservable(this)
  }
}

export default personalSkill();