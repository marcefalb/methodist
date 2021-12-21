import { makeAutoObservable, observable, toJS } from "mobx";

import fetchSpecialities from "API/fetchSpecialities";
import fetchDirections from "API/fetchDirections";

class Selects {
  specialitiesSelect = observable.array()
  directionsSelect = observable.array()
  selectedSpecialityValue = null
  selectedDirectionOption = null
  
  constructor() {
    this.fetchToSpecialities()

    makeAutoObservable(this)
  }

  async fetchToSpecialities() {
    const response = await fetchSpecialities.fetchToSpecialities()
    if (!response) return null
    response.data.specialities.forEach(speciality => {
      this.specialitiesSelect.push(speciality)
    })
  }
  
  async fetchToDirections(currentSpecialityId) {
    if (this.directionsSelect) this.directionsSelect.clear()
    if (this.selectedDirectionOption) this.setSelectValue('selectedDirectionOption', null)

    const response = await fetchDirections.fetchToDirections(currentSpecialityId)
    if (!response) return null
    response.data.directions.forEach(direction => {
      this.directionsSelect.push(direction)
    })
  }

  setSelectValue(select, value) {
    this[select] = value
  }

  get specialitiesList() {
    return toJS(this.specialitiesSelect)
  }

  get directionsList() {
    return toJS(this.directionsSelect)
  }
}

export default Selects;