import { getWindowSize } from './getWindowSize'
import { clamp } from './clamp'

const mapObject = (o, f) => Object.assign({}, ...Object.keys(o).map(k => ({ [k]: f(o[k]) })))

export const initialModalsState = {
  maxZIndex: 0,
  windowSize: getWindowSize(),
  modals: {},
}

export const initialModalState = {
  x: 0,
  y: 0,
  width: 800,
  height: 800,
  zIndex: 0,
  visible: false,
}

export const getModalState = (state, id) => state.modals[id] || initialModalState

const getNextZIndex = (state, id) =>
  getModalState(state, id).zIndex === state.maxZIndex ? state.maxZIndex : state.maxZIndex + 1

const clampDrag = (windowWidth, windowHeight, x, y, width, height) => {
  const maxX = windowWidth - width
  const maxY = windowHeight - height
  const clampedX = clamp(0, maxX, x)
  const clampedY = clamp(0, maxY, y)
  return { x: clampedX, y: clampedY }
}

const clampResize = (windowWidth, windowHeight, x, y, width, height) => {
  const maxWidth = windowWidth - x
  const maxHeight = windowHeight - y
  const clampedWidth = clamp(200, maxWidth, width)
  const clampedHeight = clamp(200, maxHeight, height)
  return { width: clampedWidth, height: clampedHeight }
}

export const DraggableModalReducer = (state, action) => {
  switch (action.type) {
    case 'resize':
      const size = clampResize(
        state.windowSize.width,
        state.windowSize.height,
        action.x,
        action.y,
        action.width,
        action.height
      )
      return {
        ...state,
        maxZIndex: getNextZIndex(state, action.id),
        modals: {
          ...state.modals,
          [action.id]: {
            ...state.modals[action.id],
            ...size,
            zIndex: getNextZIndex(state, action.id),
          },
        },
      }
    case 'drag':
      return {
        ...state,
        maxZIndex: getNextZIndex(state, action.id),
        modals: {
          ...state.modals,
          [action.id]: {
            ...state.modals[action.id],
            ...clampDrag(
              state.windowSize.width,
              state.windowSize.height,
              action.x,
              action.y,
              state.modals[action.id].width,
              state.modals[action.id].height
            ),
            zIndex: getNextZIndex(state, action.id),
          },
        },
      }
    case 'show': {
      const modalState = state.modals[action.id]
      const centerX = state.windowSize.width / 2 - modalState.width / 2
      const centerY = state.windowSize.height / 2 - modalState.height / 2
      const position = clampDrag(
        state.windowSize.width,
        state.windowSize.height,
        centerX,
        centerY,
        modalState.width,
        modalState.height
      )
      const size = clampResize(
        state.windowSize.width,
        state.windowSize.height,
        position.x,
        position.y,
        modalState.width,
        modalState.height
      )
      return {
        ...state,
        maxZIndex: state.maxZIndex + 1,
        modals: {
          ...state.modals,
          [action.id]: {
            ...modalState,
            ...position,
            ...size,
            zIndex: state.maxZIndex + 1,
            visible: true,
          },
        },
      }
    }
    case 'focus':
      const modalState = state.modals[action.id]
      return {
        ...state,
        maxZIndex: state.maxZIndex + 1,
        modals: {
          ...state.modals,
          [action.id]: {
            ...modalState,
            zIndex: state.maxZIndex + 1,
          },
        },
      }
    case 'hide': {
      const modalState = state.modals[action.id]
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.id]: {
            ...modalState,
            visible: false,
          },
        },
      }
    }
    case 'mount':
      return {
        ...state,
        maxZIndex: state.maxZIndex + 1,
        modals: {
          ...state.modals,
          [action.id]: {
            ...initialModalState,
            x: state.windowSize.width / 2 - initialModalState.width / 2,
            y: state.windowSize.height / 2 - initialModalState.height / 2,
            zIndex: state.maxZIndex + 1,
          },
        },
      }
    case 'unmount':
      const modalsClone = { ...state.modals }
      delete modalsClone[action.id]
      return {
        ...state,
        modals: modalsClone,
      }
    case 'windowResize':
      return {
        ...state,
        windowSize: action.size,
        modals: mapObject(state.modals, modalState => {
          if (!modalState.visible) {
            return modalState
          }
          const position = clampDrag(
            state.windowSize.width,
            state.windowSize.height,
            modalState.x,
            modalState.y,
            modalState.width,
            modalState.height
          )
          const size = clampResize(
            state.windowSize.width,
            state.windowSize.height,
            position.x,
            position.y,
            modalState.width,
            modalState.height
          )
          return {
            ...modalState,
            ...position,
            ...size,
          }
        }),
      }
    default:
      throw new Error()
  }
}
