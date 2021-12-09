import {React} from "react";
import { Formik, Field, Form } from 'formik';

import InputItem from "./InputItem/InputItem";
import Button from "components/Form/Button/Button"
import LinkBtn from "components/Form/LinkBtn/LinkBtn"

import "./ContactsForm.css";

import store from "store/store";
import { observer } from "mobx-react-lite";

const ContactsForm = observer(() => {
  const pageStates = store.pageStates

  if (!pageStates.isRequestFormed || pageStates.isFormSended) return null
  return (
    <section className="contacts">
      <div className="contacts__header">
        <LinkBtn type="button" text="Вернуться" onClick={() => pageStates.setPageState('isRequestFormed', false)} />
        <h1>Образовательная программа подготовки специалистов</h1>
      </div>
      {/* <InputItem title="Имя" name="name" placeholder="Иван" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
      <InputItem title="Фамилия" name="surname" placeholder="Иванов" value={surnameValue} onChange={(event) => setSurnameValue(event.target.value)} />
      <InputItem title="Отчество" name="secondName" placeholder="Иванович" value={secondName} onChange={(event) => setSecondName(event.target.value)} />
      <Select options={citiesList} name="city" title="Город" selectValue={selectValue} onChange={(event) => setSelectValue(event)} />
      <InputItem title="Компания" name="company" placeholder="МГОК" value={companyValue} onChange={(event) => setCompanyValue(event.target.value)} /> 
      }*/}
      <div className="contacts__send-btn">
        <Button
          text="Отправить"
          theme="outlined"
          size="normal"
          onClick={() => pageStates.setPageState('isFormSended', true)}
        />
      </div>
    </section>
  );
});

export default ContactsForm;
