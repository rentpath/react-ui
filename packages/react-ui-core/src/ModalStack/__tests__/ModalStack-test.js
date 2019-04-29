import React from 'react'
import renderer from 'react-test-renderer'
import ModalStack from '../ModalStack'

jest.mock('react-dom', () => ({
  createPortal: node => node,
}))

const modalDefinitions = {
  1: {
    name: 'TestModal',
    resolve: () => import('./__helpers__/TestModal'),
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

  it('renders a modal correctly', done => {
    const snap = renderer
      .create(<ModalStack currentModal={currentModal} modalDefinitions={modalDefinitions} />)

    // flush JavaScript message queue, to pick up the async import() in resolve()
    setTimeout(() => {
      expect(snap.toJSON()).toMatchSnapshot()
      done()
    })
  })
})
