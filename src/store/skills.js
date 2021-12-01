import { makeAutoObservable, observable, values } from "mobx";

import fetchPersonalSkills from "../API/fetchPersonalSkills";
import fetchProfessionalSkills from "../API/fetchProfessionalSkills";
import professionalSkill from "./professionalSkill";

class Skills {
  personalSkills = observable.map();
  selectedPersonalSkills = observable.map();
  professionalSkills = observable.map();
  demoProfessionalSkills = observable.map();
  additionalProfessionalSkills = observable.map();
  professionalFetchSkillsId = observable.array()
  isMainAdditionalActive = false;
  currentOption = null;

  constructor() {
    makeAutoObservable(this);

    this.fetchToPersonalSkills();
    this.demoProfessionalSkills.set(1, {id: 1, label: "Группа профессиональных компетенций 1", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})
    this.demoProfessionalSkills.set(2, {id: 2, label: "Группа профессиональных компетенций 2", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})
    this.demoProfessionalSkills.set(3, {id: 3, label: "Группа профессиональных компетенций 3", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})
    this.demoProfessionalSkills.set(4, {id: 4, label: "Группа профессиональных компетенций 4", isAcive: false, subskills: observable.map(), additionalSubskills: observable.map()})
  }

  async fetchToPersonalSkills() {
    const response = await fetchPersonalSkills.fetchToPersonalSkills();
    if (!response) return null;
    response.data.personal_qualities.forEach((skill) => {
      this.personalSkills.set(skill.id, skill);
    });
  }

  async fetchToProfessionalSkills(directionId) {
    const response = await fetchProfessionalSkills.fetchToProfessionalSkills(
      directionId
    );
    if (!response) return null;
    response.data.professional_qualities_groups.forEach((skill) => {
      const skillItem = new professionalSkill(skill);
      if (skillItem.isRecommended) {
        this.professionalSkills.set(skill.id, skillItem);
        this.professionalFetchSkillsId.push(skillItem.subskillsId)
        skillItem.subskillsId.forEach(subskillId => console.log('123'))
        console.log(this.professionalFetchSkillsIdList)
      }
      else this.additionalProfessionalSkills.set(skill.id, skillItem)
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

  setCurrentOption(option) {
    this.currentOption = option;
  }

  get selectedPersonalSkillsList() {
    return values(this.selectedPersonalSkills);
  }

  get personalSkillsList() {
    return values(this.personalSkills);
  }

  get professionalFetchSkillsIdList() {
    return values(this.professionalFetchSkillsId)
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

export default new Skills();
