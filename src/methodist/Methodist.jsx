import React from 'react';
import Select from "../components/Select";

const Methodist = () => {
  return (
    <main class="main">
      <div className="wrapper main__wrapper">
        <h1>Заявка на курс</h1>
        <div className="main__content">
          <Select name={'speciality'} title={'Специальность'}/>
          <Select name={'industry'} title={'Направление'}/>
        </div>
      </div>
    </main>
  );
};

export default Methodist;