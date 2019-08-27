import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import Input from '../Input'

export default ({ name, value, placeholder, setFieldValue, onBlur, success, error, ...props }) => {
  return (
    <DatePicker
      name={name}
      onBlur={onBlur}
      placeholderText={placeholder}
      selected={value}
      onChange={date => setFieldValue(name, date)}
      customInput={<Input onBlur={onBlur} error={error} value={value} success={success} />}
      {...props}
    />
  )
}
