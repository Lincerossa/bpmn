import React, { useState, useEffect } from 'react'
import Sortable from 'react-sortablejs'
import arrayMove from 'array-move'
import * as S from './styles'

export default ({ onChange, children, items }) => {
  const defaultItems = items || React.Children.map(children, (child, id) => id)

  const [internalItems, setInternalItems] = useState(defaultItems)

  function handleSortEnd(movedElement) {
    const { oldIndex, newIndex } = movedElement
    setInternalItems(arrayMove(defaultItems, oldIndex, newIndex))
  }

  useEffect(() => {
    if (internalItems === defaultItems) return
    onChange(internalItems)
  }, [internalItems])

  return (
    <Sortable options={{ onEnd: handleSortEnd }}>
      {items
        ? items.map((item, index) => (
            <S.SortableItem data-id={item.id} key={index}>
              {item.content}

            </S.SortableItem>
          ))
        : React.Children.map(children, (child, index) => (
            <div data-id={index} key={index}>
              {child}
            </div>
          ))}
    </Sortable>
  )
}
