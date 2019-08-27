import styled from 'styled-components'

export const RadioGroup = styled.div``
export const Radio = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const RadioInput = styled.input`
  border-radius: 50%;
  -webkit-appearance: none;
  margin: 0;
  width: ${props => props.radioDimension};
  height: ${props => props.radioDimension};
  background-color: ${props => (props.checked ? 'black' : 'white')};
  border: 1px solid grey;
  cursor: pointer;
  &:focus {
    border-radius: 50%;
    outline: none;
    background-color: blue;
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
