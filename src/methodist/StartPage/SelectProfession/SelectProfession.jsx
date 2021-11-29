import React from 'react';
import { observer } from 'mobx-react-lite';

import Select from 'components/Form/Select/Select'
import BtnBuildContinue from './BtnBuildContinue/BtnBuildContinue'

import store from 'store/store';
import skills from 'store/skills';

import './SelectProfession.css'

const SelectProfession = observer(() => {
  const specialityOnChange = (event) => {
    store.pageStates.setPageState(store.pageStates.isProfessionSelected, true)

    store.selects.setSelectValue(store.selects.selectedSpecialityValue, event.label)
    store.selects.fetchToDirections(event.value)

    skills.professionalSkills.clear()
  };

  const directionOnChange = (event) => {
    store.pageStates.setPageState(store.pageStates.isCompetencySelected)

    store.selects.setSelectValue(store.selects.selectedDirection, event)

    skills.professionalSkills.clear()
    skills.fetchToProfessionalSkills(event.value)
  };

  return (
    <section className="main__content select-profession">
      <Select
        name={"speciality"}
        title={"Профессия"}

        options={store.selects.specialitiesList}
        onChange={event => specialityOnChange(event)}
      />
      <Select
        name={"direction"}
        title={"Компетенция"}

        options={store.selects.directionsList}
        isDisabled={store.pageStates.isDirectionSelected}
        selectValue={store.selects.selectedDirection}
        onChange={event => directionOnChange(event)}
      />
      <BtnBuildContinue
        onClick={() => {
          store.pageStates.setPageState(store.pageStates.isCompetencySelected, true)
        }}
      />
    </section>
  )
});

export default SelectProfession