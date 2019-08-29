import React from 'react'
import { DraggableModal } from './DraggableModal'
import { DraggableModalProvider } from './DraggableModalProvider'

export default props => (
  <DraggableModalProvider>
    <DraggableModal {...props} />
  </DraggableModalProvider>
)

/* const Modal = require('./DraggableModal')
const Provider = require('./DraggableModalProvider')

export default {
  DraggableModal: Modal.DraggableModal,
  DraggableModalProvider: Provider.DraggableModalProvider,
}
 */
