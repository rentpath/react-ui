export default (Component, fallbackName = 'Component') => {
  if (typeof Component === 'string') return Component
  if (!Component) return undefined

  return Component.displayName || Component.name || fallbackName
}
