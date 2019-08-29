import styled from 'styled-components'

export const SortableItem = styled.div`
  position: relative;
  padding-left: 3rem;
  border: 1px solid black;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`
export const SortableItemIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2rem;
`
