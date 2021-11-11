import React from "react";

import "./FormButtons.css";
import { observer } from "mobx-react-lite";

const FormButtons = observer(() => {
  return (
    <div className="form-buttons">
      <button className="form-buttons__save">Сформировать</button>
    </div>
  );
});

export default FormButtons;