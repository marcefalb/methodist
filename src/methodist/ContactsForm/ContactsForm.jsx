import React from "react";

import InputItem from "./InputItem/InputItem";
import Select from "../../components/Form/Select/Select";
import "./ContactsForm.css";

const ContactsForm = () => {
  const citiesList = [
    { id: 1, name: "Тверь" },
    { id: 2, name: "Москва" },
    { id: 3, name: "Санкт-Петербург" },
  ];
  return (
    <section className="contacts">
      <InputItem title="Имя" name="name" placeholder="Иван" />
      <InputItem title="Фамилия" name="surname" placeholder="Иванов" />
      <InputItem title="Отчество" name="secondName" placeholder="Иванович" />
      <Select options={citiesList} name="city" title="Город" />
      <InputItem title="Компания" name="company" placeholder="МГОК" />
    </section>
  );
};

export default ContactsForm;
