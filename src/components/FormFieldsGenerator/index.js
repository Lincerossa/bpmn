import React, { useState } from 'react'
import Form from '../Form'
import Button from '../Button'
import Switch from '../Switch'
import Sortable from '../Sortable'
import * as S from './styles'


export default ({ onSubmit, initialInputs }) => {
  const [ inputs, setInputs ] = useState(initialInputs)
  const [ editMode, setEditMode ] = useState(false)

  const [ isActiveForm, setActiveForm ] = useState(false)

  function handleSubmit(values, { setSubmitting }) {
    setInputs([...inputs, values])
    setActiveForm(false)
    setSubmitting(false)
  }

  function handleSorting(orders){

    console.log(orders)
    const newInputs = inputs
      .map((inputs, index) => ({...inputs, order: orders.findIndex(order => order ===index)}))
      .sort((a,b) => a.order > b.order ? 1 : -1)
      .map(({order, ...input}) => ({...input}) )
    console.log(newInputs)
    setInputs(newInputs)

  }


  console.log(React.cloneElement(<Switch onClick={() => setEditMode(!editMode)} checked={editMode}>edit mode</Switch>))


  return(

    
    <div>


      {
        inputs && inputs.length > 0 &&
        <S.FormPreview>
          <S.SwitchWrapper>
            <Switch onClick={() => setEditMode(!editMode)} checked={editMode}>edit mode</Switch>
          </S.SwitchWrapper>

          
          {
            editMode
              ? <Sortable onChange={handleSorting}>
              
                {
                  inputs.map((e, index) => (

                    <S.InputWrapper>
                      <div>LABEL: {e.label}</div>
                      <div>NAME: {e.name}</div>
                      <div>PLACEHOLDER: {e.placeholder}</div>
                      <div>TYPE: {e.type}</div>
                      <S.InputDelete>
                        <Button icon="MdDelete" onClick={() => setInputs([...inputs.slice(0, index), ...inputs.slice(index + 1)])}>
                        delete
                        </Button>
                      </S.InputDelete>
                    </S.InputWrapper>
                  ))
                }
              
              </Sortable>
              : <Form
                inputs={inputs}
                submitLabel="example submit"
                onSubmit={() => {}}
                initialValues={{}}
              />

          }
          
        </S.FormPreview>

      }

      <S.Container>

      {
        (isActiveForm) ?
        <Form
          inputs={[
            {
              label: 'set the label',
              name: 'label',
              type: 'text',
              placeholder: '',
            },
            {
              label: 'set the placeholder',
              name: 'placeholder',
              type: 'text',
              placeholder: '',
              condition: values => values.label
            },
            {
              label: 'set the name',
              name: 'name',
              type: 'text',
              placeholder: '',
              condition: values => values.placeholder
            },
            {
              label: 'set the type',
              name: 'type',
              type: 'select',
              items: [
                {
                  value: 'radio',
                  label: 'radio',
                },
                {
                  value: 'text',
                  label: 'text',
                },
                {
                  value: 'checkbox',
                  label: 'checkbox'
                },
                {
                  value: 'select',
                  label: 'select'
                },
                {
                  value: 'multiselect',
                  label: 'multiselect'
                }
              ],
              condition: values => values.name
            },
          ]}
          submitLabel="add field"
          onSubmit={handleSubmit}
          initialValues={{}}
        />

        : 
        <S.Center><Button icon="MdAdd" onClick={() => setActiveForm(true)}>add field</Button>
        </S.Center>
      }

      </S.Container>
      <S.Footer>
        <Button full icon="MdAdd" onClick={() => onSubmit(inputs)}>apply</Button>
      </S.Footer>
    </div>
  )




}

