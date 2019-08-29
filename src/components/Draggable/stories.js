import React, { useCallback, useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DraggableModal from './index'
import Accordion from './../Accordion'

const BaseModal = props => {
  const [visible, setVisible] = useState(false)
  const onOk = action('Ok Clicked')
  const onCancel = useCallback(() => setVisible(false), [])
  const onToggle = useCallback(() => setVisible(v => !v), [])

  return (
    <div>
      <button onClick={onToggle} style={{ margin: 10 }}>
        Open Modal
      </button>
      <DraggableModal visible={visible} onOk={onOk} onCancel={onCancel} title={'Hello World Title'} {...props}>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
          Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor
          sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in
          ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas
          nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium
          voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non
          provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
          optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est,
          omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
          sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <Accordion>
          <div label="Training Strength">
            <p>
              <strong>Pull up</strong> 8x2
            </p>
            <p>
              <strong>Muscle up</strong> 4x2
            </p>
            <p>
              <strong>Leg Raises</strong> 5x10
            </p>
          </div>
          <div label="Training Technical">
            <p>
              <strong>HSPU</strong> 5x2
            </p>
            <p>
              <strong>Back lever</strong> 10"
            </p>
            <p>
              <strong>Front lever</strong> 10"
            </p>
          </div>
        </Accordion>
      </DraggableModal>
    </div>
  )
}

storiesOf('Draggable Modal', module)
  .add('Modal Base', () => <BaseModal />)
  .add('Modal without Footer', () => <BaseModal footer={[]} />)
  /* .add('Three Modal Togheter', () => (
    <DraggableModalProvider>
      <BaseModal />
      <BaseModal />
      <BaseModal />
    </DraggableModalProvider>
  )) */
  .add('Modal with a Mask', () => <BaseModal mask={true} />)
  .add('Modal with a customize Footer', () => (
    <BaseModal
      footer={[
        <div>I'm the coolest footer in the world :)</div>,
        <button onClick={action('Clicked Function 1')} className="primary">
          Function 1
        </button>,
        <button onClick={action('Clicked Function 2')}>Function 2</button>,
        <p>And that's all</p>,
      ]}
    />
  ))
