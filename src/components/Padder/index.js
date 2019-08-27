import React from 'react'
import * as S from './styles'

export default ({ size, children }) => (
  <S.Padder size={size}>{children}</S.Padder>
)
