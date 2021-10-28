import React from 'react';
import {observer} from "mobx-react-lite";

import Select from "../components/Form/Select/Select";
import BtnNext from "./BtnNext/BtnNext";
import PersonalSkillsList from "./PersonalSkillsList/PersonalSkillsList";
import store from "../store/store";
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
          />
          <Select
            name={'industry'}
            title={'Направление'}
            options={store.specialitiesList}
          />
          {(!store.isContinue && (
            <BtnNext onClick={() => store.setIsContinue()} isShow={store.isShowBtn} />
          )) || (
            <div className="skills">
              <PersonalSkillsList/>
              <ProfessionalSkillsList />
            </div>
          )}
        </div>
      </div>
    </main>
  );
});

export default Methodist;