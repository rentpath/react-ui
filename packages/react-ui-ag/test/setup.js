import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'

// react 16 enzyme adapter
enzyme.configure({ adapter: new Adapter() })

/* eslint-disable no-console */
const error = console.error

// throw an error on react warnings so developers fix the warnings
console.error = (message, ...args) => {
  if (/(Invalid prop|Failed prop type|React does not recognize the `.*?` prop)/gi.test(message)) {
    throw new Error(message)
  }

  error.apply(console, [message, ...args])
}
