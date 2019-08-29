import React from 'react'
import { useEffect, useReducer } from 'react'
import { DraggableModalContext } from './DraggableModalContext'
import { getWindowSize } from './getWindowSize'
import { DraggableModalReducer, initialModalsState } from './draggableModalReducer'

export const DraggableModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DraggableModalReducer, initialModalsState)

  useEffect(() => {
    if (typeof window !== 'object') {
      return
    }
    const onResize = () => dispatch({ type: 'windowResize', size: getWindowSize() })
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [dispatch])

  return (
    <DraggableModalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DraggableModalContext.Provider>
  )
}
