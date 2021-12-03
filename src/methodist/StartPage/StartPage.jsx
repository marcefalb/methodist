import React from 'react';

import SelectProfession from './SelectProfession/SelectProfession';
import SkillsForm from './SkillsForm/SkillsForm';
import FormButtons from './SkillsForm/FormButtons/FormButtons';

import './StartPage.css'

const StartPage = () => {
  return (
    <section className="main__wrapper">
      <div className="main__header">
        <h1>Запрос на специалиста</h1>
      </div>
      <SelectProfession />
      <SkillsForm />
      <FormButtons />
    </section>
  )
};

export default StartPage