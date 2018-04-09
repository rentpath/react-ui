export default Component => {
  if (typeof Component === 'string') return Component
  if (!Component) return undefined

  return Component.displayName || Component.name || 'Component'
}
