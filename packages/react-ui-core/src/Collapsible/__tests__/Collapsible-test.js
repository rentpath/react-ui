import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { keyMirror } from '@rentpath/react-ui-utils'
import Collapsible from '../Collapsible'

const Collapse = Collapsible.WrappedComponent

const theme = keyMirror([
  'Collapsible',
])

describe('Collapse', () => {
  it('renders a Collapsible', () => {
    const wrapper = shallow(<Collapsible theme={theme} />)
    expect(wrapper.find('a')).to.have.length(1)
  })

});
