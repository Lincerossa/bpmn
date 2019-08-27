import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  ${props => props.error && 'border: 1px solid red'};
  ${props => props.success && 'border: 1px solid green'};
  ${props =>
    !props.error &&
    !props.success &&
    `border: 1px solid ${props.theme.colors.grey.light}`};
  background-color: white;
`
