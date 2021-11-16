import {React, useState} from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as IcArrow } from "../assets/icons/ic_arrow-right.svg";
import { ReactComponent as IcRestart } from "../assets/icons/ic_restart.svg";
import { ReactComponent as IcAlert } from "../assets/icons/ic_alert.svg";
import store from "../store/store";
import skills from "../store/skills";
import Select from "../components/Form/Select/Select";
import Modal from "../components/Form/Modal/Modal";
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
  const onClick = () => {
    document.documentElement.style.overflow = "auto";
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
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
              title={"Профессия"}
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
          <div className="main__table-tools">
            <a className="main__table-btn" href="/">
              <IcRestart />
              <span>Вернуться</span>
            </a>
            <button className="main__table-btn" onClick={() => {
              document.documentElement.style.overflow = "hidden";
              setIsOpen(true)
            }}>
              <IcAlert />
              <span>Помощь</span>
            </button>
            {isOpen && (
              <Modal
                header="Возникли вопросы?"
                label="Свяжитесь с нами по почте: mgok@edu.mos.ru"
                onClick={() => onClick()}
                isHelp={true}
              />
            )}
          </div>
          <h2>Предварительный РУП</h2>
          <Table />
        </div>
      )}
    </main>
  );
});

export default Methodist;
