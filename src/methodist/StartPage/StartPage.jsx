import React from 'react';

import SelectProfession from './SelectProfession/SelectProfession';
import SkillsForm from './SkillsForm/SkillsForm';
import FormButtons from './SkillsForm/FormButtons/FormButtons';

const StartPage = () => {
  return (
    <sectin className="main__wrapper">
      <SelectProfession />
      <SkillsForm />
      <FormButtons />
    </sectin>
  )
};

export default StartPage