import React from 'react';
import { observer } from 'mobx-react-lite';

import PersonalSkillsList from './PersonalSkillsList/PersonalSkillsList';
import ProfessionalSkillsList from './ProfessionalSkillsList/ProfessionalSkillsList';
import FormButtons from './FormButtons/FormButtons';

import store from 'store/store';

const SkillsForm = observer(() => {
  if (!store.pageStates.isContinueBtnClicked) return null
  else 
  return (
    <div className="main__content skills-container">
      <PersonalSkillsList />
      <ProfessionalSkillsList />
      <FormButtons />
    </div>
  )
});

export default SkillsForm