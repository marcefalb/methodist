import React from 'react';
import {Link} from "react-router-dom"

import './LinkBtn.css'

const LinkBtn = ({text, icon, place, onClick}) => {
  return (
    <button
      className="link"
      onClick={onClick}
    >
      {place === "left" && icon}
      <span>{text}</span>
      {place === "right" && icon}
    </button>
  )
};

export default LinkBtn