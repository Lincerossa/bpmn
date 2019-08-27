import React from 'react'
import Select from 'react-select'

const colourStyles = {}

function createDefaultValue(value, items) {
  let CC = items

  if (items.find(item => item.options)) {
    console.log('group of options')
    CC = items.reduce((acc, val) => {
      if (val.options && val.options.length > 0) {
        return [...acc, ...val.options]
      }
      return acc
    }, [])
  }

  if (Array.isArray(value)) {
    return CC.filter(item => value.find(v => v === item.value))
  }
  return CC.find(item => item.value === value)
}

export default ({ name, value, items, setFieldValue, isMulti }) => {
  function handleChange(option) {
    if (isMulti) {
      setFieldValue(name, option && option.map(({ value }) => value))
      return
    }
    setFieldValue(name, option.value)
  }
  return (
    <Select
      defaultValue={value ? createDefaultValue(value, items) : null}
      options={items}
      styles={{ colourStyles }}
      onChange={handleChange}
      isMulti={isMulti}
    />
  )
}
