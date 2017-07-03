import * as chai from 'chai'
import * as chaiEnzyme from 'chai-enzyme'
import * as sinonChai from 'sinon-chai'
import * as dirtyChai from 'dirty-chai'
import * as jsdom from 'jsdom-global'

chai.use(chaiEnzyme())
chai.use(sinonChai)
chai.use(dirtyChai)

jsdom()
