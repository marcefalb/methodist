import React from 'react';
import { observer } from 'mobx-react-lite';

import Select from 'components/Form/Select/Select'
import BtnBuildContinue from './BtnBuildContinue/BtnBuildContinue'

import store from 'store/store';
import skills from 'store/skills';

import './SelectProfession.css'

const SelectProfession = observer(() => {
  const selects = store.selects
  const pageStates = store.pageStates
  

  const specialityOnChange = (event) => {
    pageStates.setPageState('isProfessionSelected', true)

    selects.setSelectValue('selectedSpecialityValue', event)
    selects.fetchToDirections(event.value)

    skills.professionalSkills.clear()
  };

  const directionOnChange = (event) => {
    pageStates.setPageState('isCompetencySelected', true)

    selects.setSelectValue('selectedDirectionOption', event)

    skills.professionalSkills.clear()
    skills.fetchToProfessionalSkills(event.value)
  };

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
        title={"Компетенция"}

        onChange={event => directionOnChange(event)}
        isDisabled={!pageStates.isProfessionSelected}
        options={selects.directionsList}
        selectValue={selects.selectedDirectionOption}

      />
      <BtnBuildContinue
        onClick={() => {
          pageStates.setPageState(pageStates.isCompetencySelected, true)
        }}
      />
    </section>
  )
});

export default SelectProfession