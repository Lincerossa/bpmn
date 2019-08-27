import {
  MODELS_CREATE,
  MODELS_EDIT,
  MODELS_DELETE,
} from './types.js'

export const createModel = payload => ({
  type: MODELS_CREATE,
  payload,
})

export const editModel = payload => ({
  type: MODELS_EDIT,
  payload,
})

export const deleteModel = (payload) => ({
  type: MODELS_DELETE,
  payload
})