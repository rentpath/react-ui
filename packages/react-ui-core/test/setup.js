import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import dirtyChai from 'dirty-chai'
import jsdom from 'jsdom-global'

chai.use(chaiEnzyme())
chai.use(sinonChai)
chai.use(dirtyChai)

jsdom()

// NOTE: prevents components from attempting to import css and blowing up
// https://stackoverflow.com/questions/32236443/mocha-testing-failed-due-to-css-in-webpack/37184425#37184425
function noop() {
  return {}
}

require.extensions['.css'] = noop
