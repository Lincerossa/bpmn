import React from 'react'
import { mount } from 'enzyme'
import RichText from './index'

describe('<RichText />', () => {
  it('It should render even without nothing', () => {
    expect(mount(<RichText />).exists()).toEqual(true)
  })
  it('It should render the children', () => {
    expect(
      mount(
        <RichText>
          <p>test</p>
        </RichText>
      ).exists()
    ).toEqual(true)
    expect(
      mount(
        <RichText>
          <p>test</p>
        </RichText>
      )
        .find('p')
        .exists()
    ).toEqual(true)
    expect(
      mount(
        <RichText>
          <p>test</p>
          <p>test</p>
        </RichText>
      )
        .find('p')
        .exists()
    ).toEqual(true)
    expect(
      mount(
        <RichText>
          <p>test</p>
          <p>test</p>
        </RichText>
      ).find('p').length
    ).toEqual(2)
  })

  it('It should render also with a string ', () => {
    expect(mount(<RichText text="<p>test</p>" />).exists()).toEqual(true)
    expect(mount(<RichText text="<p>test</p>" />).props().text).toEqual(
      '<p>test</p>'
    )
  })
})
