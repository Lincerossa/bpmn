import React from 'react'
import * as Icons from 'react-icons/md';
import "@material/button/dist/mdc.button.css"

export default ({children, onClick, icon, full }) => {
  const Icon = Icons[icon]
  return(
    <button className={`mdc-button mdc-button--dense ${full ? 'mdc-button--unelevated': '' }`} onClick={onClick}>
      {icon && <Icon className="material-icons mdc-button__icon" aria-hidden="true"/>}
      <span className="mdc-button__label">{children}</span>
    </button>
  )
}