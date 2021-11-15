import React from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcArrow } from "../assets/icons/ic_arrow-right.svg";
import store from "../store/store";
import skills from "../store/skills";
import Select from "../components/Form/Select/Select";
import BtnNext from "./BtnNext/BtnNext";
import EducationPlan from "./EducationPlan/EducationPlan";
import ContactsForm from "./ContactsForm/ContactsForm";
import FormButtons from "./FormButtons/FormButtons";
import PersonalSkillsList from "./PersonalSkillsList/PersonalSkillsList";
import ProfessionalSkillsList from "./ProfessionalSkillsList/ProfessionalSkillsList";
import Table from "./Table/Table"

const Methodist = observer(() => {
  const specialityOnChange = (event) => {
    store.setIsDisabled();
    store.setSelectedSpecialityValue(event.label)
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
      {!store.isSend && (<div className="wrapper main__wrapper">
        <div className="main__header">
          {store.isNext && (<button className="main__header-btn" onClick={() => store.setIsNext()}>
            <IcArrow />
            <span>Вернуться</span>
          </button>
          )}
          <h1>Запрос на специалиста</h1>
        </div>
        {!store.isNext && (
          <div className="main__content">
            <Select
              name={"speciality"}
              title={"Специальность"}
              options={store.specialitiesList}
              onChange={(event) => specialityOnChange(event)}
            />
            <Select
              name={"direction"}
              title={"Компетенция "}
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
                <FormButtons onClick={() => store.setIsFormed()}/>
              </div>
            )}
            {(store.isFormed && (
              <EducationPlan />
            ))}
          </div>
        ) || (
          <div className="main__content">
            <ContactsForm />
          </div>
        )}
      </div>
      ) || (
        <div className="main__table-wrapper">
          <h2>Предварительный РУП</h2>
          <Table />
        </div>
      )}
    </main>
  );
});

export default Methodist;
