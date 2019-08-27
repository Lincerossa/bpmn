import React from 'react'
import { Formik } from 'formik'
import Button from '../Button'
import produce from 'immer'
import * as S from './styles'
import { Input, CheckboxGroup, RadioGroup, Select, Datepicker } from '../Inputs'

const InputSwitch = props => {
  const { type, handleChange, handleBlur } = props
  switch (type) {
    case 'text':
    case 'password':
    case 'number':
      return <Input {...props} onChange={handleChange} onBlur={handleBlur} />
    case 'checkbox':
      return <CheckboxGroup {...props} onBlur={handleBlur} />
    case 'radio':
      return <RadioGroup {...props} onBlur={handleBlur} />
    case 'select':
      return <Select {...props} onBlur={handleBlur} />
    case 'date':
      return <Datepicker {...props} onBlur={handleBlur} />
    default:
      return null
  }
}

export default ({
  displayFormikState,
  initialValues,
  onSubmit,
  validationSchema,
  inputs,
  submitLabel = 'Submit',
  errorMessage,
  whiteLabels,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {props => {
      const {
        isSubmitting,
        handleSubmit,
        values,
        setValues,
        errors,
        touched,
        submitCount,
      } = props

      return (
        <React.Fragment>
          <S.Form onSubmit={handleSubmit}>
            {inputs &&
              inputs.map((input, index) => {
                const { name, condition } = input
                const value = values[name]

                if (condition && !condition(values)) {
                  // when the field needs to be hide and it's already evalued, it remofves the key and set the new values
                  if (value || value === '') {
                    setValues(
                      produce(values, draft => {
                        delete draft[name]
                      })
                    )
                  }
                  return null
                }

                const inputStatus = {
                  error: errors[name] && (touched[name] || submitCount > 0),
                  success: !errors[name] && (touched[name] || submitCount > 0),
                }

                return (
                  <S.FormGroup key={index}>
                    <S.FormGroupLabel whiteLabels={whiteLabels}>
                      {input.label}
                    </S.FormGroupLabel>
                    <InputSwitch
                      {...input}
                      {...props}
                      {...inputStatus}
                      value={value}
                      whiteLabels={whiteLabels}
                    />
                    {inputStatus.error && (
                      <S.FormGroupErrorMessage>
                        {errors[name]}
                      </S.FormGroupErrorMessage>
                    )}
                  </S.FormGroup>
                )
              })}
            {displayFormikState && (
              <S.FormikState>
                <pre>
                  <strong>props</strong> = {JSON.stringify(props, null, 2)}
                </pre>
              </S.FormikState>
            )}
            <S.ButtonWrapper>
              <Button
                color="green"
                fullWidth
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {submitLabel}
              </Button>
            </S.ButtonWrapper>
          </S.Form>
          <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        </React.Fragment>
      )
    }}
  </Formik>
)
