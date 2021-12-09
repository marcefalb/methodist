import React from 'react';

import SelectProfession from './SelectProfession/SelectProfession';
import SkillsForm from './SkillsForm/SkillsForm';
import EducationPlan from './EducationPlan/EducationPlan';

import store from 'store/store';

import './StartPage.css'
import { observer } from 'mobx-react-lite';

const StartPage = observer(() => {
  if (store.pageStates.isRequestFormed) return null
  return (
    <section className="main__wrapper">
      <div className="main__header">
        <h1>Запрос на специалиста</h1>
      </div>
      <SelectProfession />
      <SkillsForm />
      <EducationPlan />
    </section>
  )
});

export default StartPage