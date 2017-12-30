This render-prop based component helps with differentiating between focus events triggered by a keyboard event or a mouse event.

```jsx static
<KeyboardFocusContainer>
    {({ keyboardFocused, getFocusProps }) => (
        <button
            {...getFocusProps()}>
            {isKeyboardFocused ? 'Keyboard focused!' : 'Not keyboard focused' }
        </button>
    )}
</KeyboardFocusContainer>
```

This comes in handy where you want to display focus styling only when the component is tabbed to (like a button).

```jsx
<KeyboardFocusContainer>
    {({ keyboardFocused, getFocusProps }) => (
        <button
            {...getFocusProps()}
            style={{
                color: keyboardFocused ? 'red' : 'inherit'
            }}>
            {keyboardFocused ? 'Keyboard focused!' : 'Not keyboard focused' }
        </button>
    )}
</KeyboardFocusContainer>
```

You can pass any event props to `getFocusProps()` and they will be applied to the element without overriding any internal events within the `KeyboardFocusContainer`.

```jsx
initialState = { isFocused: false };

<KeyboardFocusContainer>
    {({ keyboardFocused, getFocusProps }) => (
        <button
            {...getFocusProps({
                onFocus: () => setState({ isFocused: true }),
                onBlur: () => setState({ isFocused: false })
            })}>
            {state.isFocused ? keyboardFocused ? 'Keyboard focused!' : 'Non-Keyboard focused!' : 'Not focused' }
        </button>
    )}
</KeyboardFocusContainer>
```

The `KeyboardFocusContainer` will respect `preventDefault()` for any proxied event.  Here you can see the `onFocus` property being prevented.

```jsx
initialState = { isFocused: false };

<KeyboardFocusContainer>
    {({ keyboardFocused, getFocusProps }) => (
        <button
            {...getFocusProps({
                onFocus: event => {
                    setState({ isFocused: true });
                    event.preventDefault();
                },
                onBlur: () => setState({ isFocused: false })
            })}>
            {state.isFocused ? keyboardFocused ? 'Keyboard focused!' : 'Non-Keyboard focused!' : 'Not focused' }
        </button>
    )}
</KeyboardFocusContainer>
```
