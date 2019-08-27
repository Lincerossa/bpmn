import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  font-family: sans-serif;
  -webkit-appearance: none;
  font-size: 1rem;
  padding: 0.625rem;
  font-size: 1.125rem;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  border: 1px solid ${props => props.theme.colors[props.color].main};

  /* color properties */
  color: white;
  background-color: ${props => props.theme.colors[props.color].main};

  ${props =>
    props.transparent &&
    `
    color: ${props.theme.colors[props.color].main};
    background-color: white;
  `};

  ${props =>
    props.neutral &&
    `
    color: black;
    background-color: white;
    border:none;
  `};

  &:focus {
    outline: none;
  }

  &:hover {
    color: white;
    background-color: ${props => props.theme.colors[props.color].active};
    border: 1px solid ${props => props.theme.colors[props.color].active};

    ${props =>
      props.transparent &&
      `
      background-color: ${props => props.theme.colors[props.color].main};
      border: 1px solid ${props => props.theme.colors[props.color].main};
    `};

    ${props =>
      props.neutral &&
      `
    color: black;
    background-color: white;
    border:none;
  `};
  }
`
