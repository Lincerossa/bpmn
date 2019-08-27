import { combineReducers } from 'redux'
import { createStore, compose } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import models from './models/reducer'

const rootReducer = combineReducers({
  models,
})

const persistConfig = {
  key: 'models',
  storage,
  blacklist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  compose(
   
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export const persistor = persistStore(store)
