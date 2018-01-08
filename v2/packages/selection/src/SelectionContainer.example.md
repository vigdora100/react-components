The `selectionContainer` higher-order-component helps ensure that any "single-selection scenario" has the required:
- Keyboard Navigation support
- RTL navigation support
- Accessibility for vision-impaired users
- Uses the W3 Aria Best-Practice "aria-activedescendant" focus management strategy
  - [https://www.w3.org/TR/wai-aria-practices/#kbd_focus_activedescendant](https://www.w3.org/TR/wai-aria-practices/#kbd_focus_activedescendant)

### Basic Usage

`selectionContainer` can be used in an _uncontrolled_ or _controlled_ state (similar to an `input`).

- _uncontrolled_ - The component manages the focused and selected state internally
- _controlled_ - You manage the state of the container using the provided props to give you full control of what's being visualized.

#### Vertical Mode

With normal (horizontal) usage, keyboard navigation uses the Left/Right keys. While in this mode the Up/Down keys don't affect selection or focus.

For vertical navigation (Menus, ComboBox, etc.) you can pass a `vertical` attribute when wrapping your component.

```jsx static
const CustomContainer = selectionContainer({ vertical: true })(Container);
```

### Uncontrolled Example

This example maintains all state within `selectionContainer`.

#### Vertical

```jsx
const Item = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);
const SelectableItem = selectable(Item);

const Container = (props) => <div {...props} />;
const SelectionContainer = selectionContainer({ vertical: true })(Container);

<SelectionContainer>
    <SelectableItem>Item 1</SelectableItem>
    <SelectableItem>Item 2</SelectableItem>
    <SelectableItem>Item 3</SelectableItem>
    <SelectableItem>Item 4</SelectableItem>
</SelectionContainer>
```

#### Horizontal

```jsx
const Item = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ display: 'inline-block', padding: 15, outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);
const SelectableItem = selectable(Item);

const Container = (props) => <div {...props} />;
const SelectionContainer = selectionContainer()(Container);

<SelectionContainer>
    <SelectableItem>Item 1</SelectableItem>
    <SelectableItem>Item 2</SelectableItem>
    <SelectableItem>Item 3</SelectableItem>
    <SelectableItem>Item 4</SelectableItem>
</SelectionContainer>
```

### Controlled Example

This example lifts all state into the example.

```jsx
const Item = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);
const SelectableItem = selectable(Item);

const Container = (props) => <div {...props} />;
const SelectionContainer = selectionContainer({ vertical: true })(Container);

<State initialState={{
  selectedIndex: 1,
  focusedIndex: undefined
}}>
  {(state, setState) => (
    <div>
      <p>Selected: {state.selectedIndex}</p>
      <p>Focused: {state.focusedIndex}</p>
      <SelectionContainer
        selectedIndex={state.selectedIndex}
        focusedIndex={state.focusedIndex}
        onStateChange={(newState) => setState(newState)}>
        <SelectableItem>Item 1</SelectableItem>
        <SelectableItem>Item 2</SelectableItem>
        <SelectableItem>Item 3</SelectableItem>
        <SelectableItem>Item 4</SelectableItem>
      </SelectionContainer>
    </div>
  )}
</State>
```
