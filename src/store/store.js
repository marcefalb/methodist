import {makeAutoObservable, observable, toJS} from "mobx";
import fetchSpecialities from "../API/fetchSpecialities";
import fetchDirections from "../API/fetchDirections";

class Store {
  specialitiesSelect = observable.array()
  directionsSelect = observable.array()
  selectedDirectionValue = null
  isContinue = false
  isShowBtn = false
  isDisabled = true

  constructor() {
    makeAutoObservable(this)

    this.fetchToSpecialities()
  }

  async fetchToSpecialities() {
    const response = await fetchSpecialities.fetchToSpecialities()
    if (!response) return null
    response.data.specialities.forEach(speciality => {
      this.specialitiesSelect.push(speciality)
    })
  }
  async fetchToDirections(currentSpecialityId) {
    this.directionsSelect.clear()
    const response = await fetchDirections.fetchToDirections(currentSpecialityId)
    this.setSelectedDirectionValue(null)
    if (!response) return null
    response.data.directions.forEach(direction => {
      this.directionsSelect.push(direction)
    })
  }

  setIsContinue() {
    this.isContinue = true
  }
  
  setIsShowBtn() {
    this.isShowBtn = true
  }

  setIsDisabled() {
    this.isDisabled = false
  }

  setSelectedDirectionValue(option) {
    this.selectedDirectionValue = option
  }

  get specialitiesList() {
    return toJS(this.specialitiesSelect)
  }

  get directionsList() {
    return toJS(this.directionsSelect)
  }
}

export default new Store()