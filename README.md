# react-ui [![Coverage Status](https://coveralls.io/repos/github/rentpath/react-ui/badge.svg?branch=master)](https://coveralls.io/github/rentpath/react-ui?branch=master)

React-UI is implemented as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) managed with [Lerna](https://github.com/lerna/lerna) to facilitate scripts, versioning and publishing.

For simplicity, `yarn run clean` and `yarn run build` will execute `lerna run clean` and `lerna run build`, respectively, which will traverse `packages` and run the intended scripts in all of the individual packages.

More Lerna [commands](https://github.com/lerna/lerna#commands), including how to publish.
