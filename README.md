# react-ui [![Coverage Status](https://coveralls.io/repos/github/rentpath/react-ui/badge.svg?branch=master)](https://coveralls.io/github/rentpath/react-ui?branch=master)

React-UI is implemented as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) managed with [Lerna](https://github.com/lerna/lerna) to facilitate scripts, versioning and publishing.

For simplicity, `yarn run clean` and `yarn run build` will execute `lerna run clean` and `lerna run build`, respectively, which will traverse `packages` and run the intended scripts in all of the individual packages.

More Lerna [commands](https://github.com/lerna/lerna#commands). Please use `yarn publish-packages` to semantically publish and generate a CHANGELOG for all repos below.

| Package | Version | Description |
|---------|---------|-------------|
| [`react-ui-core`](/packages/react-ui-core) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-core.svg)](https://www.npmjs.com/package/@rentpath/react-ui-core) | Core components for generic usage|
| [`react-ui-rent`](/packages/react-ui-rent) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-rent.svg)](https://www.npmjs.com/package/@rentpath/react-ui-rent) | Rent.com specific components|
| [`react-ui-rentals`](/packages/react-ui-rentals) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-rentals.svg)](https://www.npmjs.com/package/@rentpath/react-ui-rentals) | Rentals.com specific components|
| [`react-ui-ag`](/packages/react-ui-ag) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-ag.svg)](https://www.npmjs.com/package/@rentpath/react-ui-ag) | Apartmentguide.com specific components|
| [`react-ui-tracking`](/packages/react-ui-tracking) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-tracking.svg)](https://www.npmjs.com/package/@rentpath/react-ui-tracking) | Tracking HOCs and components|
| [`react-ui-utils`](/packages/react-ui-utils) | [![npm](https://img.shields.io/npm/v/@rentpath/react-ui-utils.svg)](https://www.npmjs.com/package/@rentpath/react-ui-utils) | Utililty functions used to make things easier in all repos|

## Commitizen

This project uses [commitizen](https://github.com/commitizen/cz-cli).  This allows us to automate CHANGLELOGs and version bumps in each repository.  It will include your commit in the changelog by using `git cz` when you commit

Anything that is included in the `BREAKING_CHANGES` section of the prompt will automatically bump the package version for the repo to a major version.

Also, please keep in mind your `scope` should be what you were working on. It should be something like `form` or `listing` or `photo`.  The short description of change should be precise as it's what you will see in the CHANGELOG (along with the scope).  

## Working Locally

Follow these steps to work with your local files instead of the published versions:

1. cd into the react-ui package root folder, e.g. `packages/react-ui-core`
1. run `yarn`
1. run `yarn build:watch` (this will run through all files, then ony change what's needed thereafter)
1. run `yarn link` (in `packages/react-ui-core`)
1. in your project's root folder, run `yarn link @rentpath/react-ui-core`

## react-themed

All react components use [react-themed](https://github.com/aribouius/react-themed) when needed. Please read the documenation if you're not familiar with it.

### CEM (BEM) syntax and classnames

For information on BEM, please [read](http://getbem.com/introduction/)

All components should follow a CEM (Component Element Modifier) syntax.  The top level element in your component should usually have the component name as the className. Every child should use the Component className as a prefix _unless_ you are importing another component that has already been themed. A good rule of thumb to use:

```
import classnames from 'classnames'
import Button from './Button'

class SomeComponent extends PureComponent {
  render() {
    const { theme, className } = this.props

    return (
      <div
        className={classnames(
          theme.SomeComponent,
          className,
        )}
      >
        <span>My Component</span>
        <Button>GenericButton</Button>
        <Button className={theme[Button-red']}>Some red button</Button>
      </div>
    )
  }
}
```

Notice the above.  The top level component uses [classnames](https://github.com/JedWatson/classnames) to include the base class (`SomeComponent`) and the ability to pass in a custom `className` prop.  The first `<Button>` does not get a className because it is already themed.  The second `<Button className={theme[Button-red']}>` component takes in a className with a modifier that gets appended to button the same way the top level component uses classnames.

#### Naming conventions
```
.Component_Element-modifier
```
Element is always prefixed with `_` and [PascalCased](http://wiki.c2.com/?PascalCase)
Modifier is always prefixed with `-` and camelCased

Examples

| className | C | E | M |
|--------------------|---|---|---|
| .SomeComponent | X | | |
| .SomeComponent_Navigation | X | X | |
| .SomeComponent_NavigationControls | X | X | |
| .SomeComponent-red | X | | X |
| .SomeComponent-isActive | X | | X |
| .SomeComponent_Navigation-next | X | X | X |
| .SomeComponent_NavigationControls-invalidError | X | X | X |
