import {React, useState} from "react";

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
  const [nameValue, setNameValue] = useState('')
  const [surnameValue, setSurnameValue] = useState('')
  const [secondName, setSecondName] = useState('')
  const [companyValue, setCompanyValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  return (
    <section className="contacts">
      <InputItem title="Имя" name="name" placeholder="Иван" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
      <InputItem title="Фамилия" name="surname" placeholder="Иванов" value={surnameValue} onChange={(event) => setSurnameValue(event.target.value)} />
      <InputItem title="Отчество" name="secondName" placeholder="Иванович" value={secondName} onChange={(event) => setSecondName(event.target.value)} />
      <Select options={citiesList} name="city" title="Город" selectValue={selectValue} onChange={(event) => setSelectValue(event)} />
      <InputItem title="Компания" name="company" placeholder="МГОК" value={companyValue} onChange={(event) => setCompanyValue(event.target.value)} />
      {!isValid && <div className="contacts__validation-message">
        Для отправки формы необходимо заполнить все поля
      </div>
      }
      <div className="contacts__send-btn">
        <Button
          text="Отправить"
          theme="outlined"
          width="280px"
          height="50px"
          fontSize="24px"
          borderRadius="10px"
          onClick={() => {
            if (!nameValue || !surnameValue || !secondName || !companyValue || !selectValue) {
              setIsValid(false)
            }
            else
              store.setIsSend()
          }}
        />
      </div>
    </section>
  );
};

export default ContactsForm;
