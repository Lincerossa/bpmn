import styled from 'styled-components'

export const Form = styled.form``

export const FormikState = styled.div`
  background-color: ${props => props.theme.colors.grey.light};
  margin-top: 1rem;
  padding: 1rem;
`

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  > button:nth-child(2) {
    margin-left: 1rem;
  }
`

export const ErrorMessage = styled.div`
  color: #e20000;
  font-family: sans-serif;
`

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`

export const FormGroupLabel = styled.label`
  margin-bottom: 0.25rem;
  display: block;
  font-family: sans-serif;
  letter-spacing: 0.04rem;
`

export const FormGroupErrorMessage = styled.div`
  color: red;
  padding: 0.5rem 0;
  font-family: sans-serif;
  font-size: 0.75rem;
`
