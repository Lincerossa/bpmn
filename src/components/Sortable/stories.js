import React from 'react'
import { storiesOf } from '@storybook/react'
import uuidv4 from 'uuid'

import Sortable from './index'

const items = Array.from({ length: 40 }, (e, i) => ({
  id: uuidv4(),
  content: <p>marci {i}</p>,
}))

storiesOf('Sortable', module)
  .add('default', () => (
    <Sortable onChange={items => console.log(items)}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Sortable>
  ))

  .add('with items prop', () => (
    <Sortable onChange={items => console.log(items)} items={items} />
  ))
