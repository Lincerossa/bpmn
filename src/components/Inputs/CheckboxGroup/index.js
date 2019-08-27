import React from 'react'
import * as S from './styles'

const checkboxDimension = '25px'

const CheckBox = ({
  isChecked,
  label,
  whiteLabels,
  onChange,
  name,
  value,
  onBlur,
}) => {
  return (
    <S.CheckBox>
      <S.CheckboxInput
        checked={isChecked}
        checkboxDimension={checkboxDimension}
        type="checkbox"
        name={name}
        id={name}
        onBlur={onBlur}
        onClick={() => onChange(value)}
      />
      {label && (
        <S.Label whiteLabels={whiteLabels} onClick={() => onChange(value)}>
          {label}
        </S.Label>
      )}
    </S.CheckBox>
  )
}

export default ({
  name,
  value = [],
  placeholder,
  items,
  whiteLabels,
  onBlur,
  setFieldValue,
}) => {
  function handleChange(checkedValue) {
    const indexPositionOfAlreadyChecked = value.findIndex(
      e => e === checkedValue
    )

    if (indexPositionOfAlreadyChecked > -1) {
      setFieldValue(name, [
        ...value.slice(0, indexPositionOfAlreadyChecked),
        ...value.slice(indexPositionOfAlreadyChecked + 1),
      ])
      return
    }
    setFieldValue(name, [...value, checkedValue])
  }

  return (
    <S.CheckboxGroup onBlur={onBlur} name={name}>
      {items &&
        items.map(item => (
          <CheckBox
            label={item.label}
            name={name}
            key={item.value}
            whiteLabels={whiteLabels}
            placeholder={placeholder}
            value={item.value}
            onChange={handleChange}
            onBlur={onBlur}
            isChecked={value.find(e => e === item.value)}
          />
        ))}
    </S.CheckboxGroup>
  )
}
