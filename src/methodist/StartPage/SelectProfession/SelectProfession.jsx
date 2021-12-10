import React from 'react';
import { observer } from 'mobx-react-lite';

import Select from 'components/Form/Select/Select'
import BtnBuildContinue from './BtnBuildContinue/BtnBuildContinue'

import store from 'store/store';

import './SelectProfession.css'

const SelectProfession = observer(() => {
  const selects = store.selects
  const pageStates = store.pageStates
  const professionalSkillsList = store.skills.professionalSkillsList

  const specialityOnChange = (event) => {
    pageStates.setPageState('isProfessionSelected', true)
    selects.setSelectValue('selectedSpecialityValue', event)
    professionalSkillsList.clearSkills()
    selects.fetchToDirections(event.value)
  };

  const directionOnChange = (event) => {
    pageStates.setPageState('isContinueBtnVisible', true)
    selects.setSelectValue('selectedDirectionOption', event)
    professionalSkillsList.clearSkills()
    professionalSkillsList.fetchToProfessionalSkills(event.value)
  };

  const btnBuildContinueOnClick = () => {
    pageStates.setPageState('isContinueBtnClicked', true)
  }

  return (
    <section className="main__content select-profession">
      <Select
        name={"speciality"}
        title={"Профессия"}

        options={selects.specialitiesList}
        onChange={event => specialityOnChange(event)}
      />
      <Select
        name={"direction"}
        title={"Квалификация"}

        onChange={event => directionOnChange(event)}
        isDisabled={!pageStates.isProfessionSelected}
        options={selects.directionsList}
        selectValue={selects.selectedDirectionOption}

      />
      <BtnBuildContinue
        onClick={() => btnBuildContinueOnClick()}
        visibilityState={pageStates.isContinueBtnVisible}
        existState={pageStates.isContinueBtnClicked}
      />
    </section>
  )
});

export default SelectProfession