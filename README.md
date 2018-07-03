# react-ui [![Coverage Status](https://coveralls.io/repos/github/rentpath/react-ui/badge.svg?branch=master)](https://coveralls.io/github/rentpath/react-ui?branch=master)

React-UI is implemented as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) managed with [Lerna](https://github.com/lerna/lerna) to facilitate scripts, versioning and publishing.

For simplicity, `yarn run clean` and `yarn run build` will execute `lerna run clean` and `lerna run build`, respectively, which will traverse `packages` and run the intended scripts in all of the individual packages.

More Lerna [commands](https://github.com/lerna/lerna#commands). Please use `yarn publish-packages` to semantically publish and generate a CHANGELOG for all repos below.

| Package | Version | Description |
|---------|---------|-------------|
| [`react-ui-core`](/packages/react-ui-core) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-core.svg)](https://www.npmjs.com/package/@rentpath/react-ui-core) | Core components for generic usage|
| [`react-ui-redux`](/packages/react-ui-redux) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-redux.svg)](https://www.npmjs.com/package/@rentpath/react-ui-redux) | Redux common functionality|
| [`react-ui-rent`](/packages/react-ui-rent) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-rent.svg)](https://www.npmjs.com/package/@rentpath/react-ui-rent) | Rent.com specific components|
| [`react-ui-ag`](/packages/react-ui-ag) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-ag.svg)](https://www.npmjs.com/package/@rentpath/react-ui-ag) | Apartmentguide.com specific components|
| [`react-ui-tracking`](/packages/react-ui-tracking) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-tracking.svg)](https://www.npmjs.com/package/@rentpath/react-ui-tracking) | Tracking HOCs and components|
| [`react-ui-utils`](/packages/react-ui-utils) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-utils.svg)](https://www.npmjs.com/package/@rentpath/react-ui-utils) | Utililty functions used to make things easier in all repos|
