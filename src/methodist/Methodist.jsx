import React from 'react';
import Select from "../components/Form/Select/Select";
import BtnNext from "./BtnNext/BtnNext";
import PersonalSkillsList from "./PersonalSkillsList/PersonalSkillsList";
import {observer} from "mobx-react-lite";
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
          />
          <Select
            name={'industry'}
            title={'Направление'}
          />
          {(!store.isContinue && (
            <BtnNext onClick={() => store.setIsContinue()}/>
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