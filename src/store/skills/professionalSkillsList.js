import { makeAutoObservable, observable, values } from "mobx";

import fetchProfessionalSkills from "API/fetchProfessionalSkills";

import professionalSkill from "store/skills/professionalSkill";

class ProfessionalSkillsList {
  professionalSkills = observable.map();
  additionalSkills = observable.map();

  constructor() {
    this.professionalSkillsDemo = observable.map([
      {
        id: 1,
        label: "Группа профессиональных компетенций 1",
      },
      {
        id: 2,
        label: "Группа профессиональных компетенций 2",
      },
      {
        id: 3,
        label: "Группа профессиональных компетенций 3",
      },
      {
        id: 4,
        label: "Группа профессиональных компетенций 4",
      },
      {
        id: 5,
        label: "Группа профессиональных компетенций 5",
      },
    ]);
      
    this.isMainAdditionalActive = false;

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

  toggleSkill(skillId, isAdditional) {
    if (isAdditional)
      this.additionalSkills.forEach((skillItem) => {
        if (skillItem.id === skillId) {
          this.professionalSkills.set(skillItem.id, skillItem);
          this.additionalSkills.delete(skillItem.id);
        }
      });
    else
      this.professionalSkills.forEach((skillItem) => {
        if (skillItem.id === skillId) {
          this.additionalSkills.set(skillItem.id, skillItem);
          this.professionalSkills.delete(skillItem.id);
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

  get additionalSkillsList() {
    return values(this.additionalSkills);
  }

  get professionalSkillsListDemo() {
    return values(this.professionalSkillsDemo);
  }
}

export default ProfessionalSkillsList;
