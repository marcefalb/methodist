import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../../components/Form/Button/Button";
import "./FormButtons.css";

const FormButtons = observer(({onClick}) => {
  return (
    <div className="form-buttons">
      <Button
        text="Сформировать"
        theme="outlined"
        width="235px"
        height="50px"
        fontSize="24px"
        borderRadius="10px"
        onClick={onClick}
      />
    </div>
  );
});

export default FormButtons;