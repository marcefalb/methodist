import {makeAutoObservable, observable, values} from "mobx";

import fetchPersonalSkills from "../API/fetchPersonalSkills";
import fetchProfessionalSkills from "../API/fetchProfessionalSkills";
import professionalSkill from './professionalSkill'

class Skills {
  personalSkills = observable.map()
  selectedPersonalSkills = observable.map()
  professionalSkills = observable.array([
    { id: '1', label: 'Документация', isActive: false, subskills: [
        { id: '1', label: 'Анализ исходных данных для выполнения токарной обработки заготовок деталей средней сложности с точностью размеров по 10 му  11 му квалитету' },
        { id: '2', label: 'Анализ исходных данных для выполнения токарной обработки заготовок деталей средней сложности с точностью размеров по 12 14 му квалитету' },
        { id: '3', label: 'Анализ исходных данных для выполнения токарной обработки заготовок деталей средней сложности с точностью размеров по 5 му  6 му квалитету' },
        { id: '4', label: 'Анализ исходных данных для выполнения токарной обработки заготовок сложных деталей с точностью размеров по 10 му  11 му квалитету' },
        { id: '5', label: 'Анализ исходных данных для выполнения токарной обработки заготовок сложных деталей с точностью размеров по 12 14 му квалитету' },
      ] },
    { id: '2', label: 'Детали и их элементы', isActive: false, subskills: [
        { id: '1', label: 'Визуальное определение дефектов обработанных поверхностей' },
        { id: '2', label: 'Выполнение технологических операций нарезания червяков по 6 й  7 й степени точности' },
        { id: '3', label: 'Выполнение технологических операций точения деталей средней сложности с точностью размеров по 10 му  11 му квалитету' },
        { id: '4', label: 'Выполнение технологических операций точения деталей средней сложности с точностью размеров по 12 14 му квалитету' },
        { id: '5', label: 'Выполнение технологических операций точения простых деталей с точностью размеров по 10 14 му квалитету' },
      ] },
    { id: '3', label: 'Режущий инструмент', isActive: false, subskills: [
        { id: '1', label: 'Заточка простых резцов и сверл  контроль качества заточки' },
      ] },
    { id: '4', label: 'Контрольный инструмент', isActive: false, subskills: [
        { id: '1', label: 'Контроль наружных и внутренних двухзаходных резьб' },
        { id: '2', label: 'Контроль наружных и внутренних однозаходных треугольного профиля  прямоугольных и трапецеидальных резьб' },
        { id: '3', label: 'Контроль точности размеров  формы и взаимного расположения поверхностей деталей средней сложности с точностью размеров по 10 му  11 му квалитету' },
        { id: '4', label: 'Контроль точности размеров  формы и взаимного расположения поверхностей деталей средней сложности с точностью размеров по 12 14 му квалитету' },
        { id: '5', label: 'Контроль точности размеров  формы и взаимного расположения поверхностей простых деталей с точностью размеров по 10 14 му квалитету' },
        { id: '6', label: 'Контроль точности размеров  формы и взаимного расположения поверхностей простых деталей с точностью размеров по 7 9 му квалитету' },
      ] },
    { id: '5', label: 'Оборудование', isActive: false, subskills: [
        { id: '1', label: 'Настройка и наладка универсального токарного станка для обработки заготовок деталей средней сложности с точностью размеров по 10 му  11 му квалитету' },
        { id: '2', label: 'Настройка и наладка универсального токарного станка для обработки заготовок деталей средней сложности с точностью размеров по 12 14 му квалитету' },
        { id: '3', label: 'Настройка и наладка универсального токарного станка для обработки заготовок простых деталей с точностью размеров по 10  14 квалитетам' },
        { id: '4', label: 'Подготовка рабочего места  настройка и наладка универсального токарного станка для нарезания и накатки многозаходных наружных и внутренних резьб и нарезания червяков по 8 й  9 й степени точности' },
        { id: '5', label: 'Проведение регламентных работ по техническому обслуживанию токарных станков' },
      ] },
    { id: '6', label: 'Приспособления', isActive: false, subskills: [
        { id: '1', label: 'Поддержание исправного технического состояния технологической оснастки  размещенной на рабочем месте токаря' },
      ] },
  ])
  additionalProfessionalSkills = observable.map()
  currentOption = null

  constructor() {
    makeAutoObservable(this)

    this.fetchToPersonalSkills()
  }

  async fetchToPersonalSkills() {
    const response = await fetchPersonalSkills.fetchToPersonalSkills()
    if (!response) return null
    response.data.personal_qualities.forEach(skill => {
      this.personalSkills.set(skill.id, skill)
    })
  }

  async fetchToProfessionalSkills() {
    const response = await fetchProfessionalSkills.fetchToProfessionalSkills()
    if (!response) return null
    response.data.professional_qualities_groups.forEach(skill => {
      const skillItem = new professionalSkill(skill)
      this.professionalSkills.set(skill.id, skillItem)
    })
  }

  toggleSkill(skillId, arrayFrom, arrayTo) {
    arrayFrom.forEach(skillItem => {
      if (skillItem.id === skillId) {
        arrayTo.set(skillItem.id, skillItem)
        arrayFrom.delete(skillItem.id)
      }
    })
  }

  removeProfessionalSkill(skillId) {
    this.professionalSkills.forEach(skill => {
      if (skillId === skill.id) 
        this.professionalSkills.remove(skill)
    })
  }

  removeProfessionalSubskill(parentSkillId, skillId) {
    this.professionalSkills.forEach(parentSkill => {
      if (parentSkillId === parentSkill.id)
        parentSkill.subskills.forEach(skill => {
          if (skillId === skill.id)
            parentSkill.subskills.remove(skill)
        })
    })
  }

  setIsActive(skillObjId) {
    this.professionalSkills.forEach(skill => {
      if (skill.id === skillObjId)
        skill.isActive = !skill.isActive
    })
  }

  setCurrentOption(option) {
    this.currentOption = option
  }
  
  get selectedPersonalSkillsList() {
    return values(this.selectedPersonalSkills)
  }

  get personalSkillsList() {
    return values(this.personalSkills)
  }
}

export default new Skills()