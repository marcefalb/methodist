import { makeAutoObservable, observable, toJS } from "mobx";

import fetchSpecialities from "API/fetchSpecialities";
import fetchDirections from "API/fetchDirections";

class Selects {

  constructor() {
    makeAutoObservable(this)

    this.specialitiesSelect = observable.array()
    this.directionsSelect = observable.array()
    this.selectedSpecialityValue = null
    this.selectedDirection = {}

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

  setSelectValue(select, value) {
    console.log('select: ', select, 'value: ', value)
    select = value
  }

  setSelectedDirectionValue(option) {
    this.selectedDirectionValue = option
  }

  setSelectedSpecialityValue(option) {
    this.selectedSpecialityValue = option
  }

  get specialitiesList() {
    return toJS(this.specialitiesSelect)
  }

  get directionsList() {
    return toJS(this.directionsSelect)
  }
}

export default Selects;