import styled from 'styled-components'

export const ResizeHandler = styled.div`
  width: 12px;
  right: 0px;
  border: 2px solid grey;
  height: 12px;
  bottom: 0px;
  position: absolute;
  border-top: 0;
  border-left: 0;
  .ant-design-draggable-modal-title{
    color: red;
  }
`

export const ResizeHandlerInner = styled.div`
  right: -10px;
  width: 44px;
  bottom: -10px;
  cursor: se-resize;
  height: 44px;
  position: absolute;

`
