import React from 'react'
import { storiesOf } from '@storybook/react'
import RichText from './index'

storiesOf('RichText', module)
  .add('default', () => (
    <RichText>
      <p>lorem ipsum dolor sit amet</p>
    </RichText>
  ))
  .add('with text prop', () => (
    <RichText text="<p>lorem ipsum dolor sit amet</p>" />
  ))
  .add('with nothing', () => <RichText />)
