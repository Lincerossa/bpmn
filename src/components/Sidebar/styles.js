import styled from 'styled-components'

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  padding-top: 4rem;
  z-index: 1;
  width: 280px;
  background-color: white;
  ${props =>
    props.direction === 'right' &&
    `
    right: -280px;
  `}
  ${props =>
    props.direction === 'left' &&
    `
    left: -280px;
  `}
`

export const Close = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  border: 2px solid #6200ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #6200ee;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #6200ee;
    border: 2px solid #6200ee;
  }
`

export const SidebarOpacity = styled.div`
  position: absoliute;
`

export const Fullscreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${props =>
    props.opacity &&
    `
    opacity: ${props.opacity}
  `};
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.backgroundColor &&
    `
    background-color: ${props.backgroundColor};
  `}
`
