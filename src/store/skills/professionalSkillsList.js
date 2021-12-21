import { makeAutoObservable, observable, toJS, values } from "mobx";

import fetchProfessionalSkills from "API/fetchProfessionalSkills";
import fetchProfSkillsId from "API/fetchProfSkillsId";

import professionalSkill from "store/skills/professionalSkill";

class ProfessionalSkillsList {
  professionalSkills = observable.map();
  additionalSkills = observable.map();
  professionalSkillsId = observable.array();
  hoursNumber = 0

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

  async fetchProfessionalSkillsId(idsArray) {
    const response = await fetchProfSkillsId.fetchProfSkillsId(idsArray)

    if (!response) this.hoursNumber = 0
    else this.hoursNumber = response.data
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

    this.renderSkillsId()
  }

  toggleSubskill(profSkill, skillId, isAdditional) {
    if (isAdditional) 
    profSkill.additionalSubskills.forEach((skillItem) => {
      if (skillItem.id === skillId) {
        profSkill.subskills.set(skillItem.id, skillItem);
        profSkill.additionalSubskills.delete(skillItem.id);
      }
    })
    
    else 
    profSkill.subskills.forEach((skillItem) => {
      if (skillItem.id === skillId) {
        profSkill.additionalSubskills.set(skillItem.id, skillItem);
        profSkill.subskills.delete(skillItem.id);
      }
    })

  this.renderSkillsId()
  }

  renderSkillsId() {
    this.professionalSkillsId.clear()

    this.professionalSkills.forEach(skill => {
      skill.subskills.forEach(subskill => {
        this.professionalSkillsId.push(subskill.id)
      })
    })

    this.fetchProfessionalSkillsId(this.professionalSkillsIdList)
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

  get professionalSkillsIdList() {
    return toJS(this.professionalSkillsId)
  }
}

export default ProfessionalSkillsList;
