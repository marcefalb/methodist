import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../../components/Form/Button/Button";
import "./FormButtons.css";

const FormButtons = observer(() => {
  return (
    <div className="form-buttons">
<<<<<<< HEAD
      <Button
        text="Сформировать"
        theme="outlined"
        width="235px"
        height="50px"
        fontSize="24px"
        borderRadius="10px"
      />
=======
      <button className="form-buttons__save">Сформировать</button>
>>>>>>> e7ff982b1d84f7e3499c4261d2ecbaa54f81ebfc
    </div>
  );
});

export default FormButtons;