import React from 'react'

import * as S from './styles'

export default ({ color, children }) => (
  <S.Background color={color}>{children}</S.Background>
)
