import {makeAutoObservable, observable} from "mobx";
import skills from "./skills";

class Skill {
  skillItem = observable.array
  isRecommended = false

  constructor(skill) {
    makeAutoObservable(this)

    this.skillItem = skill
    this.isRecommended = false
  }
}

export default Skill()