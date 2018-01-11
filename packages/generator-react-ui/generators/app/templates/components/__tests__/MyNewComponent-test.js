import { React, expect, mount } from 'utils'
import { Provider } from 'react-redux'
import { createMockStore } from 'mocks'

import MyGreatNewComponentContainer from '../container'
import MyGreatNewComponent from '../components/MyGreatNewComponent'

describe('<MyGreatNewComponentContainer />', () => {
  let component

  before(() => {
    const data = {
      MyGreatNewComponent: {
        someProperty: false,
      },
    }
    const store = createMockStore(data)
    const container = mount(
      <Provider store={store}>
        <MyGreatNewComponentContainer />
      </Provider>
    )

    component = container.find(MyGreatNewComponent)
  })

  it('wraps <MyGreatNewComponent />', () => {
    expect(component.length).to.eq(1)
  })
})
