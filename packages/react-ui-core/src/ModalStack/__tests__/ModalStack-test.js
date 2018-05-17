import React from 'react'
import renderer from 'react-test-renderer'
import ModalStack from '../ModalStack'

const modalDefinitions = {
  1: {
    name: 'TestModal',
    resolve: () => import('../../LeadModal/LeadModal'),
    overlay: true,
  },
}

const currentModal = {
  id: 1,
  props: {
    listingId: '100057144',
    endecaId: '100057144_1330723',
    propertyLabel: 'LEVEL Furnished Living',
    desktopPhone: '2135684026',
    tplSource: 'MYADS',
    isPaid: true,
    revenue: '17.16',
  },
}

describe('ModalStack', () => {
  it('renders correctly', () => {
    const snap = renderer
      .create(<ModalStack modalDefinitions={modalDefinitions} />)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })
  it('renders a modal correctly', () => {
    const snap = renderer
      .create(<ModalStack currentModal={currentModal} modalDefinitions={modalDefinitions} />)
      .toJSON()
    expect(snap).toMatchSnapshot()
  })
})
