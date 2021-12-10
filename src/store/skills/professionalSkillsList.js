import { makeAutoObservable, observable, values } from "mobx";

import fetchProfessionalSkills from "API/fetchProfessionalSkills";

import professionalSkill from "store/skills/professionalSkill";

class ProfessionalSkillsList {
  professionalSkills = observable.map();
  additionalSkills = observable.map();
  professionalSkillsDemo = observable.map([
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

  constructor() {
    makeAutoObservable(this);
  }

  async fetchToProfessionalSkills(directionId) {
    const response = await fetchProfessionalSkills.fetchToProfessionalSkills(directionId);

    if (!response) return null;
    response.data.professional_qualities_groups.forEach((skill) => {
      const skillItem = new professionalSkill(skill);
      if (skill.is_recommended) this.professionalSkills.set(skill.id, skillItem);
      else this.additionalSkills.set(skill.id, skillItem)
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

  toggleSubskill(profSkill, skillId, isAdditional) {
    if (isAdditional) {
      profSkill.additionalSubskills.forEach((skillItem) => {
        if (skillItem.id === skillId) {
          profSkill.subskills.set(skillItem.id, skillItem);
          profSkill.additionalSubskills.delete(skillItem.id);
        }
      })
    }

    else {
      profSkill.subskills.forEach((skillItem) => {
        console.log(skillItem.id, skillId)
        if (skillItem.id === skillId) {
          profSkill.additionalSubskills.set(skillItem.id, skillItem);
          profSkill.subskills.delete(skillItem.id);
        }
      })
    }
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

  clearSkills() {
    this.professionalSkills.clear()
    this.additionalSkills.clear()
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
