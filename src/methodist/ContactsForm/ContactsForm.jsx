import {React} from "react";
import { Formik, Form, ErrorMessage  } from 'formik';
import * as Yup from "yup";

import { ReactComponent as IcArrowRight } from "assets/icons/ic_arrow-right.svg";
import InputItem from "./InputItem/InputItem";
import Button from "components/Form/Button/Button"
import LinkBtn from "components/Form/LinkBtn/LinkBtn"

import "./ContactsForm.css";

import store from "store/store";
import { observer } from "mobx-react-lite";

const ContactsForm = observer(() => {
  const pageStates = store.pageStates
  const contactsScheme = Yup.object().shape({
    name: Yup.string()
      .required('Введите ваше имя'),
    surname: Yup.string()
      .required('Введите вашу фамилию'),
    secondname: Yup.string()
      .required('Введите ваше отчество'),
    city: Yup.string()
      .required('Введите ваш город'),
    company: Yup.string()
      .required('Введите вашу компанию/организацию'),
  });

  if (!pageStates.isRequestFormed || pageStates.isFormSended) return null
  return (
    <section className="contacts">
      <div className="contacts__header">
        <LinkBtn text="Вернуться" icon={<IcArrowRight />} place="left" onClick={() => pageStates.setPageState('isRequestFormed', false)} />
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
        validationSchema={contactsScheme}
        onSubmit={() => pageStates.setPageState('isFormSended', true)}
      >
        <Form className="contacts__form">
          <InputItem title="Имя" name="name" placeholder="Иван" />
          <span className="contacts__validation-message"><ErrorMessage name="name" /></span>
          
          <InputItem title="Фамилия" name="surname" placeholder="Александров" />
          <span className="contacts__validation-message"><ErrorMessage name="surname" /></span>

          <InputItem title="Отчество" name="secondname" placeholder="Алексеевич" />
          <span className="contacts__validation-message"><ErrorMessage name="secondname" /></span>

          <InputItem title="Город" name="city" placeholder="Москва" />
          <span className="contacts__validation-message"><ErrorMessage name="city" /></span>

          <InputItem title="Компания" name="company" placeholder="МГОК" />
          <span className="contacts__validation-message"><ErrorMessage name="company" /></span>
          
          <div className="contacts__send-btn">
            <Button
              text="Отправить"
              theme="outlined"
              size="normal"
            />
          </div>
        </Form>
      </Formik>
    </section>
  );
});

export default ContactsForm;
