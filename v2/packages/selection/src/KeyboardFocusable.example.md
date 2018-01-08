This higher-order-component helps with differentiating between focus events triggered by a keyboard event or a mouse event.

```jsx static
const Button = ({ focused, ...other }) => (
  <button {...other}>
    {focused ? 'Keyboard focused!' : 'Not keyboard focused' }
  </button>
);
const FocusableButton = keyboardFocusable(Button);

<FocusableButton />
```

This comes in handy where you want to display focus styling only when the component is tabbed to (like a button).

```jsx
const Button = ({ focused, ...other }) => (
  <button
    style={{
        color: focused ? 'red' : 'inherit'
    }}
    {...other}>
    {focused ? 'Keyboard focused!' : 'Not keyboard focused' }
  </button>
);
const FocusableButton = keyboardFocusable(Button);

<FocusableButton />
```
