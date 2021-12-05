import { makeAutoObservable } from "mobx";

import personalSkillsList from 'store/skills/personalSkillsList'
import professionalSkillsList from 'store/skills/professionalSkillsList'

class Skills {
  constructor() {
    this.personalSkillsList = new personalSkillsList()
    this.professionalSkillsList = new professionalSkillsList()

    makeAutoObservable(this);
  }

  toggleSkill(skillId, arrayFrom, arrayTo) {
    arrayFrom.forEach((skillItem) => {
      if (skillItem.id === skillId) {
        arrayTo.set(skillItem.id, skillItem);
        arrayFrom.delete(skillItem.id);
      }
    });
  }
}

export default Skills
