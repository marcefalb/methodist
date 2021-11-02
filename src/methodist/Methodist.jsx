import React from 'react';
import {observer} from "mobx-react-lite";

import store from "../store/store";
import Select from "../components/Form/Select/Select";
import BtnNext from "./BtnNext/BtnNext";
import FormButtons from "./FormButtons/FormButtons";
import PersonalSkillsList from "./PersonalSkillsList/PersonalSkillsList";
import ProfessionalSkillsList from "./ProfessionalSkillsList/ProfessionalSkillsList";

const Methodist = observer(() => {
  return (
    <main className="main">
      <div className="wrapper main__wrapper">
        <h1>Заявка на курс</h1>
        <div className="main__content">
          <Select
            name={'speciality'}
            title={'Специальность'}
            options={store.specialitiesList}
            onChange={(event) => {
              store.setIsDisabled()
              store.fetchToDirections(event.value)
            }}
          />
          <Select
            name={'direction'}
            title={'Направление'}
            options={store.directionsList}
            onChange={(event) => {
              store.setIsShowBtn()
              store.setSelectedDirectionValue(event)
            }}
            isDisabled={store.isDisabled}
            selectValue={store.selectedDirectionValue}
          />
          {(!store.isContinue && (
            <BtnNext onClick={() => store.setIsContinue()} isShow={store.isShowBtn} />
          )) || (
            <div className="skills">
              <PersonalSkillsList/>
              <ProfessionalSkillsList />
              <FormButtons />
            </div>
          )}
        </div>
      </div>
    </main>
  );
});

export default Methodist;