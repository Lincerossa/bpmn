import React from 'react'
import * as S from './styles'

export const ResizeHandle = ({ ...props }) => (
  <S.ResizeHandler {...props}>
    <S.ResizeHandlerInner />
  </S.ResizeHandler>
)
