import parseArgs from '../parseArgs'

describe('utils/parseArgs', () => {
  const component = () => null
  const props = { className: 'foo' }

  it('returns an array', () => {
    expect(Array.isArray(parseArgs())).toBeTruthy()
  })

  describe('when value is null', () => {
    it('returns default component and default props', () => {
      const args = parseArgs(null, component, props)
      expect(args).toEqual([component, props])
    })
  })

  describe('when value is a function', () => {
    it('returns value and default props', () => {
      const value = () => null
      const args = parseArgs(value, component, props)
      expect(args).toEqual([value, props])
    })
  })

  describe('when value is an object', () => {
    it('returns default component and composed props', () => {
      const value = { className: 'bar', id: 'bar' }
      const args = parseArgs(value, component, props)
      expect(args).toEqual([component, { className: 'foo bar', id: 'bar' }])
    })
  })

  describe('when value is a string', () => {
    it('returns default component, default props, and value as child', () => {
      const value = 'Hello World!'
      const args = parseArgs(value, component, props)
      expect(args).toEqual([component, props, value])
    })
  })
})
