import React from 'react'
import { storiesOf } from '@storybook/react'

import { getRandomInputItems } from '../../utility'
import Background from '../Background'
import Form from './index'
import * as Yup from 'yup'

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 500)
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('The email is required'),
  multipleOptions: Yup.array()
    .of(Yup.string())
    .required(),
  radio1: Yup.string().required('err'),
  mydate: Yup.string().required('date is required'),
})

const inputs = [
  {
    label: 'first name',
    name: 'name',
    type: 'text',
    placeholder: 'team eglobe',
  },
  {
    label: 'date field',
    name: 'mydate',
    type: 'date',
    placeholder: 'click and select a date',
  },
  {
    label: 'email',
    name: 'email',
    type: 'text',
    placeholder: 'test@email.com',
  },
  {
    label: 'age',
    name: 'age',
    type: 'number',
  },
  {
    label: 'checkbox example required',
    name: 'multipleOptions',
    type: 'checkbox',
    items: getRandomInputItems(10, 'checkbox'),
  },
  {
    label: 'checkbox example',
    name: 'multipleOptions3',
    type: 'checkbox',
    items: getRandomInputItems(10, 'checkbox'),
  },
  {
    label: 'radio example',
    name: 'radio1',
    type: 'radio',
    items: getRandomInputItems(5, 'radio'),
  },
  {
    label: 'select example',
    name: 'select1',
    type: 'select',
    items: getRandomInputItems(40, 'select'),
  },
  {
    label: 'select example with multiple options available',
    name: 'select2',
    type: 'select',
    isMulti: true,
    items: getRandomInputItems(40, 'select'),
  },
  {
    label: 'select with group of options',
    name: 'select3',
    type: 'select',
    isMulti: true,
    items: [
      {
        label: 'sublabel 1',
        options: getRandomInputItems(20, 'select'),
      },
      {
        label: 'sublabel 2',
        options: getRandomInputItems(20, 'select'),
      },
      {
        label: 'sublabel 3',
        options: getRandomInputItems(20, 'select'),
      },
    ],
  },
  {
    label: 'radio conditional',
    name: 'radioConditional',
    type: 'radio',
    items: getRandomInputItems(5, 'radio'),
    condition: values => values.select3 && values.select3.length > 3,
  },
]

storiesOf('Form', module)
  .add('default', () => (
    <Form
      displayFormikState
      onSubmit={onSubmit}
      initialValues={{}}
      inputs={inputs}
      validationSchema={validationSchema}
    />
  ))
  .add('with custom submit label', () => (
    <Form
      displayFormikState
      onSubmit={onSubmit}
      initialValues={{}}
      inputs={inputs}
      submitLabel="Submit all"
      validationSchema={validationSchema}
    />
  ))
  .add('with white labels', () => (
    <Background color="#1d5d90">
      <Form
        displayFormikState
        onSubmit={onSubmit}
        initialValues={{}}
        inputs={inputs}
        whiteLabels
        submitLabel="Submit all"
        validationSchema={validationSchema}
      />
    </Background>
  ))
  .add('with initial values', () => (
    <Form
      displayFormikState
      onSubmit={onSubmit}
      initialValues={{
        email: 'test@email.it',
      }}
      inputs={inputs}
      submitLabel="Submit all"
      validationSchema={validationSchema}
    />
  ))
  .add('with conditional fields', () => {
    return (
      <Form
        displayFormikState
        onSubmit={onSubmit}
        initialValues={{}}
        inputs={[
          {
            label: 'age',
            name: 'age',
            type: 'number',
          },
          {
            label: 'name (if age > 18)',
            name: 'name',
            type: 'text',
            condition: values => values.age && values.age > 18,
          },
        ]}
        submitLabel="Submit all"
        validationSchema={Yup.object().shape({
          age: Yup.number(),
          name: Yup.string().when('age', {
            is: age => age && age > 18,
            then: Yup.string().required('testo obbligatorio'),
          }),
        })}
      />
    )
  })
