<img src="https://travis-ci.org/ryardley/jsx-switch.svg?branch=master" />

# jsx-switch

Simple switching for React JSX

Found a bug? Got a feature request? [Submit an issue!](https://github.com/ryardley/jsx-switch/issues)

# Installation

Install locally.

```bash
$ npm install jsx-switch --save
```

Requires React 15.0.0 or later.

# Usage

```jsx
import { Switch, Case, Default } from 'jsx-switch';

function MyComponent() {
  return (
    <Switch>
      <Case expr={...}>
        <Component1 />
      </Case>
      <Case expr={...}>
        <Component2 />
      </Case>
      <Case expr={...}>
        <Component3 />
      </Case>
      <Default>
        <Component4 />
      </Default>
    </Switch>
  );
}
```

