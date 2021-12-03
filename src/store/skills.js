import { makeAutoObservable, observable, values } from "mobx";

import fetchProfessionalSkills from "../API/fetchProfessionalSkills";
import professionalSkill from "./professionalSkill";

import personalSkillsList from 'store/personalSkillsList'

class Skills {
  professionalSkills = observable.map();
  demoProfessionalSkills = observable.map();
  additionalProfessionalSkills = observable.map();
  isMainAdditionalActive = false;
  currentOption = null;

  constructor() {
    
    this.demoProfessionalSkills.set(1, {id: 1, label: "Группа профессиональных компетенций 1", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})
    this.demoProfessionalSkills.set(2, {id: 2, label: "Группа профессиональных компетенций 2", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})
    this.demoProfessionalSkills.set(3, {id: 3, label: "Группа профессиональных компетенций 3", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})
    this.demoProfessionalSkills.set(4, {id: 4, label: "Группа профессиональных компетенций 4", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})

    this.personalSkillsList = new personalSkillsList()

    makeAutoObservable(this);
  }
  
  async fetchToProfessionalSkills(directionId) {
    const response = await fetchProfessionalSkills.fetchToProfessionalSkills(
      directionId
    );
    if (!response) return null;
    response.data.professional_qualities_groups.forEach((skill) => {
      const skillItem = new professionalSkill(skill);
      this.professionalSkills.set(skill.id, skillItem);
    });
  }

  toggleSkill(skillId, arrayFrom, arrayTo) {
    arrayFrom.forEach((skillItem) => {
      if (skillItem.id === skillId) {
        arrayTo.set(skillItem.id, skillItem);
        arrayFrom.delete(skillItem.id);
      }
    });
  }

  setIsActive(skillObjId) {
    this.professionalSkills.forEach((skill) => {
      if (skill.id === skillObjId) skill.setIsActive();
    });
  }

  setAdditionalIsActive(skillObjId) {
    this.professionalSkills.forEach((skill) => {
      if (skill.id === skillObjId) skill.setAdditionalIsActive();
    });
  }

  setMainAdditionalIsActive() {
    this.isMainAdditionalActive = !this.isMainAdditionalActive;
  }

  get professionalSkillsList() {
    return values(this.professionalSkills);
  }

  get professionalAdditionalSkillsList() {
    return values(this.additionalProfessionalSkills);
  }

  get demoProfessionalSkillsList() {
    return values(this.demoProfessionalSkills)
  }
}

export default Skills
