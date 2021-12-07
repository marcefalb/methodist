import { makeAutoObservable, observable, values } from "mobx";

import fetchPersonalSkills from "API/fetchPersonalSkills";

class PersonalSkillsList {
  personalSkills = observable.map();
  selectedSkills = observable.map();
  currentSelectOption = null

  constructor() {
    this.fetchToPersonalSkills();

    makeAutoObservable(this)
  }

  async fetchToPersonalSkills() {
    const response = await fetchPersonalSkills.fetchToPersonalSkills();
    if (!response) return null;
    response.data.personal_qualities.forEach((skill) => {
      this.personalSkills.set(skill.id, skill);
    });
  }
  
  toggleSkill(skillId, isSelected) {
    if (isSelected)
      this.selectedSkills.forEach((skillItem) => {
        if (skillItem.id === skillId) {
          this.personalSkills.set(skillItem.id, skillItem);
          this.selectedSkills.delete(skillItem.id);
        }
      });
    else
      this.personalSkills.forEach((skillItem) => {
        if (skillItem.id === skillId) {
          this.selectedSkills.set(skillItem.id, skillItem);
          this.personalSkills.delete(skillItem.id);
        }
      });
  }
  
  setCurrentSelectOption(option) {
    this.currentSelectOption = option;
  }

  get selectedSkillsList() {
    return values(this.selectedSkills);
  }

  get personalSkillsList() {
    return values(this.personalSkills);
  }
}

export default PersonalSkillsList