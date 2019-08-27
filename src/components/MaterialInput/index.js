import React, { useRef, useEffect } from 'react'

import "@material/textfield/dist/mdc.textfield.css"

import {MDCTextField} from '@material/textfield';

export default ({onChange, label}) => {

  const myRef = useRef()


  useEffect(() => {
    if(myRef && myRef.current){
      new MDCTextField(myRef.current) 
    }
  }, [myRef])

  return(
    <div className="mdc-text-field mdc-text-field--outlined" ref={myRef}>
      <input onChange={onChange} type="text" id="tf-outlined" className="mdc-text-field__input"/>
      <div className="mdc-notched-outline">
        <div className="mdc-notched-outline__leading"></div>
        <div className="mdc-notched-outline__notch">
          <label for="tf-outlined" className="mdc-floating-label">{label}</label>
        </div>
        <div className="mdc-notched-outline__trailing"></div>
      </div>
    </div>
  )
}

