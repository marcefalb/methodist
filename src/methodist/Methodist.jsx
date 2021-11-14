import React from "react";
import { observer } from "mobx-react-lite";

import store from "../store/store";
import skills from "../store/skills";
import Select from "../components/Form/Select/Select";
import BtnNext from "./BtnNext/BtnNext";
import FormButtons from "./FormButtons/FormButtons";
import PersonalSkillsList from "./PersonalSkillsList/PersonalSkillsList";
import ProfessionalSkillsList from "./ProfessionalSkillsList/ProfessionalSkillsList";

const Methodist = observer(() => {
  const specialityOnChange = (event) => {
    store.setIsDisabled();
    store.fetchToDirections(event.value);
    skills.professionalSkills.clear()
  };
  const directionOnChange = (event) => {
    store.setIsShowBtn();
    store.setSelectedDirectionValue(event)
    skills.professionalSkills.clear()
    skills.fetchToProfessionalSkills(event.value)
  };
  return (
    <main className="main">
      <div className="wrapper main__wrapper">
        <h1>Образовательная программа подготовки специалистов</h1>
        <div className="main__content">
          <Select
            name={"speciality"}
            title={"Специальность"}
            options={store.specialitiesList}
            onChange={(event) => specialityOnChange(event)}
          />
          <Select
            name={"direction"}
<<<<<<< HEAD
            title={"Компетенция "}
=======
            title={"Компетенция"}
>>>>>>> e7ff982b1d84f7e3499c4261d2ecbaa54f81ebfc
            options={store.directionsList}
            onChange={(event) => directionOnChange(event)}
            isDisabled={store.isDisabled}
            selectValue={store.selectedDirectionValue}
          />
          {(!store.isContinue && (
            <BtnNext
              onClick={() => store.setIsContinue()}
              isShow={store.isShowBtn}
            />
          )) || (
            <div className="skills">
              <PersonalSkillsList />
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
