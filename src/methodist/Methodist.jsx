import React from 'react';
import Select from "../components/Form/Select/Select";
import BtnNext from "./BtnNext/BtnNext";

const Methodist = () => {
  return (
    <main className="main">
      <div className="wrapper main__wrapper">
        <h1>Заявка на курс</h1>
        <div className="main__content">
          <Select name={'speciality'} title={'Специальность'}/>
          <Select name={'industry'} title={'Направление'}/>
          <BtnNext />
        </div>
      </div>
    </main>
  );
};

export default Methodist;