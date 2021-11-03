import React from 'react'

import './Button.css'

const Button = ({text, theme, width, height, fontSize, borderRadius, onClick}) => {
  const customStyles = {
    minWidth: width,
    height: height,
    fontSize: fontSize,
    borderRadius: borderRadius,
  }
  return (
    <button
      className={theme === 'default' ? 'btn btn-default' : 'btn btn-outlined'}
      onClick={onClick}
      style={customStyles}
    >
      {text}
    </button>
  )
}

export default Button