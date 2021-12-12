import { makeAutoObservable } from "mobx";

import personalSkillsList from 'store/skills/personalSkillsList'
import professionalSkillsList from 'store/skills/professionalSkillsList'


class Skills {
  constructor() {
    this.personalSkillsList = new personalSkillsList()
    this.professionalSkillsList = new professionalSkillsList()

    makeAutoObservable(this);
  }
}

export default Skills
