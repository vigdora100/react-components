The `SelectionContainer` component helps ensure that any "single-selection scenario" has the required:
- Keyboard Navigation support
  - Left/Right (Up/Down in RTL) arrow movement
  - Home/End key shortcuts
  - Click selection
  - Custom focused state for Keyboard-Focus vs. MouseDown-Focus
- RTL navigation support
  - Comptabible with element shifting when `direction: rtl` is enabled
- Accessibility for vision-impaired users
- Uses the W3 "aria-activedescendant" focus management strategy
  - [https://www.w3.org/TR/wai-aria-practices/#kbd_focus_activedescendant](https://www.w3.org/TR/wai-aria-practices/#kbd_focus_activedescendant)

## Basic Usage

The `SelectionContainer` component follows the "Render-Prop pattern". This means that it doesn't render any UI, it just provides the required navigation and accessibility props to your UI components.

It can be used in an _uncontrolled_ or _controlled_ state (similar to an `input`).

- _uncontrolled_ - The component manages the focused and selected state internally
- _controlled_ - You manage the state of the container using the provided props to give you full control of what's being visualized.

This render container supplies 2 render methods:

- `getContainerProps()` - Must be applied to a parent element for accessibility.
- `getItemProps({ item: required })` - Apply to any selectable item. A unique item must be provided for each selectable item.

and 2 state attributes:

- `focusedIndex`
- `selectedItem`

Any attributes passed to `getContainerProps` or `getItemProps` will be applied to the element. This usage allows you to apply events and props to the component without interfering with the containers logic. Any event that has `event.preventDefault()` called within it will not be triggered within the component.

### Uncontrolled Container

```jsx
const ExampleItem = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ display: 'inline-block', padding: 15, outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);
const items = ['Button 1', 'Button 2', 'Button 3'];

<SelectionContainer>
 {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
    <div {...getContainerProps()}>
      {items.map((item, index) => (
        <ExampleItem {...getItemProps({
          item,
          key: index,
          selected: selectedItem === item,
          focused: focusedIndex === index
        })}>
          {item}
        </ExampleItem>
      ))}
    </div>
 )}
</SelectionContainer>
```

### Controlled Container

```jsx
const ExampleItem = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ display: 'inline-block', padding: 15, outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);
const items = ['Controlled 1', 'Controlled 2', 'Controlled 3'];

initialState = {
  focusedIndex: 1,
  selectedItem: items[1]
};

<SelectionContainer
  focusedIndex={state.focusedIndex}
  selectedItem={state.selectedItem}
  onStateChange={({ focusedIndex, selectedItem }) => setState({ focusedIndex, selectedItem })}>
 {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
    <div {...getContainerProps()}>
      {items.map((item, index) => (
        <ExampleItem {...getItemProps({
          item,
          key: index,
          selected: selectedItem === item,
          focused: focusedIndex === index
        })}>
          {item}
        </ExampleItem>
      ))}
    </div>
 )}
</SelectionContainer>
```

### Vertical Mode

You are able to control (Left/Right) vs. (Up/Down) arrow key navigation using the `vertical` prop.

```jsx
const ExampleItem = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ padding: 15, outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);
const items = ['Button 1', 'Button 2', 'Button 3'];

<SelectionContainer vertical>
 {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
    <div {...getContainerProps()}>
      {items.map((item, index) => (
        <ExampleItem {...getItemProps({
          item,
          key: index,
          selected: selectedItem === item,
          focused: focusedIndex === index
        })}>
          {item}
        </ExampleItem>
      ))}
    </div>
 )}
</SelectionContainer>
```
