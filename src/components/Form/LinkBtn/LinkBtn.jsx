import React from 'react';
import {Link} from "react-router-dom"

import { ReactComponent as IcArrowRight } from "assets/icons/ic_arrow-right.svg";

import './LinkBtn.css'

const LinkBtn = ({type, text, href, onClick}) => {
  if (type === 'link') return (
    <Link
      className="link"
      to={href}
    >
      <IcArrowRight />
      <span>{text}</span>
    </Link>
  )
  return (
    <button
      className="link"
      onClick={onClick}
    >
      <IcArrowRight />
      <span>{text}</span>
    </button>
  )
};

export default LinkBtn