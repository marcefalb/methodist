import React from "react";

import InputItem from "./InputItem/InputItem";
import Select from "../../components/Form/Select/Select";
import "./ContactsForm.css";
import Button from "../../components/Form/Button/Button"
import store from "../../store/store";

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
      <div className="contacts__send-btn">
        <Button
          text="Отправить"
          theme="outlined"
          width="280px"
          height="50px"
          fontSize="24px"
          borderRadius="10px"
          onClick={() => {store.setIsSend()}}
        />
      </div>
    </section>
  );
};

export default ContactsForm;
