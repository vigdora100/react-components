This render-prop based component helps with differentiating between focus events triggered by a keyboard event or a mouse event.

```jsx static
<KeyboardFocusContainer>
    {({ isKeyboardFocused, onFocus, onBlur, onMouseDown }) => (
        <button
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseDown={onMouseDown}>
            {isKeyboardFocused ? 'Keyboard focused!' : 'Not keyboard focused' }
        </button>
    )}
</KeyboardFocusContainer>
```

This comes in handy where you want to display focus styling only when the component is tabbed to (like a button).

```jsx
<KeyboardFocusContainer>
    {({ isKeyboardFocused, onFocus, onBlur, onMouseDown }) => (
        <button
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseDown={onMouseDown}
            style={{
                color: isKeyboardFocused ? 'red' : 'inherit'
            }}>
            {isKeyboardFocused ? 'Keyboard focused!' : 'Not keyboard focused' }
        </button>
    )}
</KeyboardFocusContainer>
```
