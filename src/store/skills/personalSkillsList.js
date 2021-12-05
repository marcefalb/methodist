import { makeAutoObservable, observable, values } from "mobx";

import fetchPersonalSkills from "API/fetchPersonalSkills";

class PersonalSkillsList {
  constructor() {
    this.personalSkills = observable.map();
    this.selectedPersonalSkills = observable.map();
    this.currentSelectOption = null

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
  
  setCurrentSelectOption(option) {
    this.currentSelectOption = option;
  }

  get selectedPersonalSkillsList() {
    return values(this.selectedPersonalSkills);
  }

  get personalSkillsList() {
    return values(this.personalSkills);
  }
}

export default PersonalSkillsList