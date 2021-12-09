import React from "react";
import { observer } from "mobx-react-lite";

import Button from "components/Form/Button/Button";

import store from "store/store";

import "./FormButtons.css";

const FormButtons = observer(() => {
  const pageStates = store.pageStates

  return (
    <div className="form-buttons">
      <Button
        text="Сформировать"
        theme="outlined"
        width="235px"
        height="50px"
        fontSize="24px"
        borderRadius="10px"
        onClick={() => pageStates.setPageState('isSkillsSelected', true)}
      />
    </div>
  );
});

export default FormButtons;