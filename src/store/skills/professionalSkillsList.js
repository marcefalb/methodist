import { makeAutoObservable, observable, values } from "mobx";

import fetchProfessionalSkills from "API/fetchProfessionalSkills";

import professionalSkill from "store/skills/professionalSkill";

class ProfessionalSkillsList {
  constructor() {
    this.professionalSkills = observable.map();
    this.additionalSkills = observable.map();
    this.professionalSkillsDemo = observable.map([
      {
        id: 1,
        label: "Группа профессиональных компетенций 1",
        isAcive: false,
        subskills: observable.map(),
        additionalSubskills: observable.map(),
      },
      {
        id: 2,
        label: "Группа профессиональных компетенций 2",
        isAcive: false,
        subskills: observable.map(),
        additionalSubskills: observable.map(),
      },
      {
        id: 3,
        label: "Группа профессиональных компетенций 3",
        isAcive: false,
        subskills: observable.map(),
        additionalSubskills: observable.map(),
      },
      {
        id: 4,
        label: "Группа профессиональных компетенций 4",
        isAcive: false,
        subskills: observable.map(),
        additionalSubskills: observable.map(),
      },
      {
        id: 5,
        label: "Группа профессиональных компетенций 5",
        isAcive: false,
        subskills: observable.map(),
        additionalSubskills: observable.map(),
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
