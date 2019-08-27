import styled from 'styled-components'

export const CheckboxGroup = styled.div``
export const CheckBox = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

export const CheckboxInput = styled.input`
  -webkit-appearance: none;
  background-color: ${props => (props.checked ? 'black' : 'transparent')};
  margin: 0;
  height: ${props => props.checkboxDimension};
  width: ${props => props.checkboxDimension};
  cursor: pointer;
  border: 1px solid grey;

  &:focus {
  }
  &:active {
    background-color: violet;
  }
`

export const Label = styled.div`
  display: flex;
  font-family: sans-serif;
  letter-spacing: 0.04rem;
  align-items: center;
  margin-left: 0.5rem;
  cursor: pointer;
  color: ${props => (props.whiteLabels ? 'white' : 'auto')};
`
