import React from  'react'
import "@material/switch/dist/mdc.switch.css"

export default ({onClick, checked, children}) => {


  return (
    <>
      <div onClick={onClick}  class={`mdc-switch ${checked && 'mdc-switch--checked'}`}>
        <div  class="mdc-switch__track"></div>
        <div  class="mdc-switch__thumb-underlay">
          <div  class="mdc-switch__thumb">
          <input  checked={checked} type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" />      
          </div>
        </div>
      </div>
      <label for="basic-switch">{children}</label>
        </>
  )
}

