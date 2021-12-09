import {React} from "react";
import { Formik, Form } from 'formik';

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
      <Formik
        initialValues={{
          name: '',
          surname: '',
          secondname: '',
          city: '',
          company: '',
        }}
      >
        <Form className="contacts__form">
          <InputItem title="Имя" name="name" placeholder="Иван" />
          <InputItem title="Фамилия" name="surname" placeholder="Александров" />
          <InputItem title="Отчество" name="secondname" placeholder="Алексеевич" />
          <InputItem title="Город" name="city" placeholder="Москва" />
          <InputItem title="Компания" name="company" placeholder="МГОК" />
          
          <div className="contacts__send-btn">
            <Button
              text="Отправить"
              theme="outlined"
              size="normal"
              onClick={() => pageStates.setPageState('isFormSended', true)}
            />
          </div>
        </Form>
      </Formik>
    </section>
  );
});

export default ContactsForm;
