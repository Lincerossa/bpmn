import React, { useState } from 'react'
import { useContext } from 'react'
import uuidv4 from 'uuid/v4'
import { DraggableModalContext } from './DraggableModalContext'
import { DraggableModalInner } from './DraggableModalInner'
import { getModalState } from './draggableModalReducer'
import './styles.css'
//import 'antd/dist/antd.css'

export const DraggableModal = ({ ...props }) => {
  // Get the unique ID of this modal.
  const [id] = useState(uuidv4())

  // Get modal provider.
  const modalProvider = useContext(DraggableModalContext)
  if (!modalProvider) {
    throw new Error('No Provider')
  }

  const { dispatch, state } = modalProvider
  const modalState = getModalState(state, id)

  // We do this so that we don't re-render all modals for every state change.
  // DraggableModalInner uses React.memo, so it only re-renders if
  // if props change (e.g. modalState).
  return <DraggableModalInner id={id} dispatch={dispatch} modalState={modalState} {...props} />
}
