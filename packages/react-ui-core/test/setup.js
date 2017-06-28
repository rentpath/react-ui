import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import dirtyChai from 'dirty-chai'
import jsdom from 'jsdom-global'

chai.use(chaiEnzyme())
chai.use(sinonChai)
chai.use(dirtyChai)

jsdom()
