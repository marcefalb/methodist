import {makeAutoObservable, observable, toJS} from "mobx";
import fetchSpecialities from "../API/fetchSpecialities";
import fetchDirections from "../API/fetchDirections";

class Store {
  specialitiesSelect = observable.array()
  directionsSelect = observable.array()
  selectedSpecialityValue = null
  selectedDirectionValue = null
  currentSliderValue = 256
  isContinue = false
  isShowBtn = false
  isDisabled = true
  isFormed = false
  isNext = false
  isSend = false

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

  setIsFormed() {
    this.isFormed = true
  }
  
  setIsShowBtn() {
    this.isShowBtn = true
  }

  setIsDisabled() {
    this.isDisabled = false
  }

  setIsNext() {
    this.isNext = !this.isNext
  }
  setIsSend() {
    this.isSend = true
  }

  setSelectedDirectionValue(option) {
    this.selectedDirectionValue = option
  }

  setSelectedSpecialityValue(option) {
    this.selectedSpecialityValue = option
  }

  setCurrentSliderValue(sliderValue) {
    this.currentSliderValue = sliderValue
    console.log(this.currentSliderValue)
  }

  get specialitiesList() {
    return toJS(this.specialitiesSelect)
  }

  get directionsList() {
    return toJS(this.directionsSelect)
  }
}

export default new Store()