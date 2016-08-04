# jsx-switch

Simple switching for React JSX

Found a bug? Got a feature request? [Submit an issue!](https://github.com/ryardley/jsx-switch/issues)

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

