import produce from 'immer'
import uuid from 'uuid/v1'
import {
  MODELS_CREATE,
  MODELS_EDIT,
  MODELS_DELETE,
} from './types.js'


const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {

    
    case MODELS_CREATE:
      return [
        ...state,
        {
          data: action.payload,
          date: new Date(),
          id: uuid()
        }
      ]

    case MODELS_EDIT:
     return produce(state, draft => {
      const index = draft.findIndex(model => model.id === action.payload.id)

      if(draft[index]){
        draft[index] = action.payload
        draft[index].date = new Date()
      }
     })

    case MODELS_DELETE:
      const newModels = produce(state, draft => {
       const index = draft.findIndex(model => model.id === action.payload)
       if(draft[index]){
        delete draft[index]

       }
      })

      return newModels.filter(e => e)

    default:
      return state
  }
}


export const getModels = state => state.models
export const getModel = ({state, id}) => state.models.find( model => model.id === id)