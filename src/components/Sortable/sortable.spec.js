import React from 'react'
import { mount } from 'enzyme'
import Sortable from './index'

describe('<Sortable />', () => {
  it('It should render even without nothing', () => {
    expect(mount(<Sortable />).exists()).toEqual(true)
  })

  it('It should render with chidren as props', () => {
    const childrenProps = Array.from({ length: 40 }, (e, i) => (
      <p key={i}>{i}</p>
    ))
    expect(mount(<Sortable>{childrenProps}</Sortable>).exists()).toEqual(true)
    expect(
      mount(<Sortable>{childrenProps}</Sortable>).find('p').length
    ).toEqual(40)
    expect(
      mount(<Sortable>{childrenProps}</Sortable>)
        .find('p')
        .at(1)
        .text()
    ).toEqual('1')
    expect(
      mount(<Sortable>{childrenProps}</Sortable>)
        .find('p')
        .at(1)
        .text()
    ).toEqual('1')
  })

  it('It should render with items as props', () => {
    const items = Array.from({ length: 40 }, (e, i) => ({
      id: i,
      content: <p key={i}>{i % 2 ? 'lorem' : 'ipsum'}</p>,
    }))

    const MountedSortable = mount(<Sortable items={items} />)

    expect(MountedSortable.exists()).toEqual(true)
    expect(MountedSortable.find('p').length).toEqual(40)
    expect(
      MountedSortable.find('p')
        .at(0)
        .text()
    ).toEqual('ipsum')
    expect(
      MountedSortable.find('p')
        .at(1)
        .text()
    ).toEqual('lorem')
  })
})
