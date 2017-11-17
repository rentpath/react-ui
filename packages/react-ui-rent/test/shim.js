// NOTE: this file is temporary due to the following:
// https://github.com/facebook/jest/issues/4545
const raf = cb => {
  setTimeout(cb, 0)
}

global.requestAnimationFrame = raf
