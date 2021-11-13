import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../../components/Form/Button/Button";
import "./FormButtons.css";

const FormButtons = observer(() => {
  return (
    <div className="form-buttons">
      <Button
        text="Удалить"
        theme="outlined"
        width="235px"
        height="50px"
        fontSize="24px"
        borderRadius="10px"
      />
    </div>
  );
});

export default FormButtons;