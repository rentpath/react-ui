import React from 'react'
import { shallow } from 'enzyme'
import SmoothScrollGalleryWrapper from '../SmoothScrollGalleryWrapper'

describe('SmoothScrollGalleryWrapper', () => {
  const setup = props => shallow(<SmoothScrollGalleryWrapper {...props} />)
  const child = <div>child</div>

  it('lazy-loads when appropriate props are passed', () => {
    const wrapper = setup({
      children: child,
      lazyLoadProps: {},
    })
    expect(wrapper.find('LazyLoad')).toHaveLength(1)
    expect(wrapper.childAt(0)).toEqual(shallow(child))
  })

  it('does not lazy-loads when appropriate props are not pased', () => {
    const wrapper = setup({
      children: child,
      lazyLoadProps: false,
    })
    expect(wrapper.find('LazyLoad')).toHaveLength(0)
    expect(wrapper).toEqual(shallow(child))
  })
})
