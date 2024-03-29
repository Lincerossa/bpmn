import React from 'react'
import { useEffect, useMemo, useCallback, memo } from 'react'
import { Modal } from 'antd'
import { ResizeHandle } from './ResizeHandle'
import { useDrag } from './useDrag'
import { usePrevious } from './usePrevious'
import { useResize } from './useResize'

const modalStyle = { margin: 0, paddingBottom: 0, pointerEvents: 'auto' }

export const DraggableModalInner = memo(({ id, modalState, dispatch, visible, children, title, ...props }) => {
  // Call on mount and unmount.
  useEffect(() => {
    dispatch({ type: 'mount', id })
    return () => dispatch({ type: 'unmount', id })
  }, [dispatch, id])

  // Bring this to the front if it's been opened with props.
  const visiblePrevious = usePrevious(visible)
  useEffect(() => {
    if (visible !== visiblePrevious) {
      if (visible) {
        dispatch({ type: 'show', id })
      } else {
        dispatch({ type: 'hide', id })
      }
    }
  }, [visible, visiblePrevious, id, dispatch])

  const { zIndex, x, y, width, height } = modalState

  const style = useMemo(() => ({ ...modalStyle, top: y, left: x, height }), [y, x, height])

  const onFocus = useCallback(() => dispatch({ type: 'focus', id }), [id, dispatch])

  const onDragWithID = useCallback(args => dispatch({ type: 'drag', id, ...args }), [dispatch, id])

  const onResizeWithID = useCallback(args => dispatch({ type: 'resize', id, ...args }), [dispatch, id])

  const onMouseDrag = useDrag(x, y, onDragWithID)
  const onMouseResize = useResize(x, y, width, height, onResizeWithID)

  const titleElement = useMemo(
    () => (
      <div className="ant-design-draggable-modal-title" onMouseDown={onMouseDrag} onClick={onFocus}>
        {title}
      </div>
    ),
    [onMouseDrag, onFocus, title]
  )

  return (
    <Modal
      wrapClassName="ant-design-draggable-modal"
      style={style}
      width={width}
      destroyOnClose={true}
      mask={props.mask || false}
      maskClosable={props.maskClosable || false}
      zIndex={zIndex}
      title={titleElement}
      visible={visible}
      {...props}
    >
      <div onClick={onFocus}>{children}</div>
      <ResizeHandle onMouseDown={onMouseResize} />
    </Modal>
  )
})
