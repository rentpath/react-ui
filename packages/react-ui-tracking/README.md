# react-ui-tracking
A collection of React components that act as view layer abstractions for event collection libraries such as [event-tracker](github.com/rentpath/event-tracker.js).

## Installation
Install the stable version:
```javascript
npm i --save @rentpath/react-ui-tracking
```

## Basic Usage
Render the `Tracker` component as a top-level parent of your application, providing it with callback functions for handling page view events, and the setting of page level data.
```javascript
import React from 'react'
import { Tracker } from '@rentpath/react-ui-tracking'

const trackPageView = props => {
  ...
}

const setPageData = props => {
  ...
}

const App = props => (
  <Tracker setData={setPageData} pageView={trackPageView} >
    {props.children}
  </Tracker>
)
```

Once the tracker is in place, you can render the `PageView` component to trigger a page view event, or a `Tagging` component to attach arbitrary data to each event triggered on the current page.   
```javascript
import React from 'react'
import { PageView, Tagging } from '@rentpath/react-ui-tracking'

const HomePage = props => (
  <div>
    <PageView />
    <Tagging page="home" />
    {this.props.children}
  </div>
)
```

## API Reference
#### `<Tracker [setData] [pageView]>`
Provides a `tracker` context for child components, enabling them to call the provided callback functions.
- `setData` \(*Function*): A function that should apply arbitrary data to events for the current page.
- `pageView` \(*Function*): A function that should trigger a page view event.

#### `<PageView [...props]>`
Automatically triggers a page view event anytime the component is mounted, or its props are updated.  All provided props are passed as event data to the `pageView` callback.

#### `<Tagging [...props]>`
Automatically updates page level data anytime the component is mounted, or its props are updated.  All provided props are passed as page level event data to the `setData` callback.
