import React from 'react'
import * as S from './styles'

export default ({ children, size }) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
)
