# @zendeskgarden/react-selection

This package contains utilities and components related to selection in the Zendesk Garden Design System.

## Installation

```bash
# yarn usage
yarn add @zendeskgarden/react-selection

# NPM usage
npm install --save @zendeskgarden/react-selection
```

## Basic Usage

This package contains several selection components that use the [Render-Prop (child-as-a-function)](https://reactpatterns.com/#render-callback) design pattern.

This allows the consumer to create accessible, performant interactions against _any_ UI Components. Regardless of whether they are wrapped in a specific higher-order-component or styling.

```jsx static
<KeyboardFocusContainer>
  {({ getFocusProps, keyboardFocused }) => (
      <button
          {...getFocusProps()}>
          {isKeyboardFocused ? 'Keyboard focused!' : 'Not keyboard focused' }
      </button>
  )}
</KeyboardFocusContainer>
```
