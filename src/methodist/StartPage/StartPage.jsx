import React, { useRef } from 'react';
import { ScrollTo } from 'react-scroll-to'

import SelectProfession from './SelectProfession/SelectProfession';
import SkillsForm from './SkillsForm/SkillsForm';
import EducationPlan from './EducationPlan/EducationPlan';

import store from 'store/store';

import './StartPage.css'
import { observer } from 'mobx-react-lite';

const StartPage = observer(() => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
  const myRef = useRef(null)
  
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