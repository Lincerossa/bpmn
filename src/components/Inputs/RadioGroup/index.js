import React from 'react'
import * as S from './styles'

const radioDimension = '25px'

const Radio = ({
  checked,
  label,
  whiteLabels,
  onChange,
  value,
  name,
  onBlur,
}) => {
  return (
    <S.Radio>
      <S.RadioInput
        checked={checked}
        radioDimension={radioDimension}
        type="radio"
        name={name}
        onBlur={onBlur}
        onChange={() => onChange(value)}
      />
      {label && (
        <S.Label whiteLabels={whiteLabels} onClick={() => onChange(value)}>
          {label}
        </S.Label>
      )}
    </S.Radio>
  )
}

export default ({
  name,
  value,
  placeholder,
  items,
  whiteLabels,
  setFieldValue,
  onBlur,
}) => (
  <S.RadioGroup>
    {items &&
      items.map(item => (
        <Radio
          key={item.value}
          label={item.label}
          name={name}
          onBlur={onBlur}
          whiteLabels={whiteLabels}
          placeholder={placeholder}
          value={item.value}
          onChange={value => setFieldValue(name, value)}
          checked={value === item.value}
        />
      ))}
  </S.RadioGroup>
)
