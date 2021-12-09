import React from 'react'

import './Button.css'

const Button = ({text, theme, size, onClick}) => {
  let btnClassList = "btn "
  if (theme === 'filled') btnClassList += "btn-filled "
  else btnClassList += "btn-outlined "
  if (size === "small") btnClassList += "btn-small "
  else btnClassList += "btn-normal "

  return (
    <button
      className={btnClassList}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button