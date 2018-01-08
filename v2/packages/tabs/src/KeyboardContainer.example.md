The `SelectionContainer` component helps ensure that any "single-selection scenario" has the required:
- Keyboard Navigation support
- RTL navigation support
- Accessibility for vision-impaired users
- Uses the W3 "Roving Tabindex" focus management strategy
  - [https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex](https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex)

## Basic Usage

The `SelectionContainer` component follows the "Render-Prop pattern". This means that it doesn't render any UI, it just provides the require navigation and accessibility props to your UI components.

It can be used in an _uncontrolled_ or _controlled_ state (similar to an `input`).

- _uncontrolled_ - The component manages the focused and selected state internally
- _controlled_ - You manage the state of the container using the provided props to give you full control of what's being visualized.

This render container supplies 2 render methods:

- `getContainerProps()` - Must be applied to a parent element for accessibility.
- `getItemProps({ item: any })` - Apply to any selectable item. A unique item must be provided for each selectable item.

and 2 state attributes:

- `focusedIndex`
- `selectedItem`

Any attributes passed to `getContainerProps` or `getItemProps` will be applied to the element. This usage allows you to apply events and props to the component without interfering with the containers logic. Any event that has `event.preventDefault()` called within it will not be triggered within the component.

### Uncontrolled Container

```jsx
const { Button, ButtonGroup } = Garden.Button;
const items = ['Button 1', 'Button 2', 'Button 3'];

<KeyboardContainer>
 {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
    <ButtonGroup {...getContainerProps()}>
      {items.map((item, index) => (
        <Button {...getItemProps({
          item,
          key: index,
          selected: selectedItem === item,
        })}>
          {item}
        </Button>
      ))}
    </ButtonGroup>
 )}
</KeyboardContainer>
```

### Controlled Container

```jsx
const { Button, ButtonGroup } = Garden.Button;
const items = ['Controlled 1', 'Controlled 2', 'Controlled 3'];

initialState = {
  focusedIndex: 1,
  selectedItem: items[2]
};

<KeyboardContainer
  focusedIndex={state.focusedIndex}
  selectedItem={state.selectedItem}
  onStateChange={({ focusedIndex, selectedItem }) => setState({ focusedIndex, selectedItem })}>
 {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
    <ButtonGroup {...getContainerProps()}>
      {items.map((item, index) => (
        <Button {...getItemProps({
          item,
          key: index,
          selected: selectedItem === item,
        })}>
          {item}
        </Button>
      ))}
    </ButtonGroup>
 )}
</KeyboardContainer>
```

### Custom Items

You can pass anything as an `item`, not just strings. If you don't want an item to be selectable, don't apply the render props to the element.

#### Custom UI Elements
`getItemProps` applies several props to the UI element, including a `ref` prop.

Unfortunately, `ref` is a reserved prop name in React and many UI styling libraries require the use of an `innerRef` prop to properly focus elements.

By default, `getItemProps` uses `innerRef` to get the reference of your element. This works out-of-the-box for all Garden UI components, Styled-Components, Fela, and Glamorous elements.

If you need to use an native element (or anything else) you can provide a `refKey` attribute that maps to the necessary key.

```jsx
const { Button, ButtonGroup } = Garden.Button;
const items = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Non-Selectable Item 3', isDisabled: true }, { name: 'Item 4' }];

initialState = {
  focusedIndex: 1,
  selectedItem: items[1]
};

<KeyboardContainer
  focusedIndex={state.focusedIndex}
  selectedItem={state.selectedItem}
  onStateChange={({ focusedIndex, selectedItem }) => setState({ focusedIndex, selectedItem })}
  vertical>
 {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => (
    <div {...getContainerProps()}>
      {items.map((item, index) => {
        const props = !item.isDisabled ? getItemProps({
            item,
            key: index,
            refKey: 'ref',
          }) : {
            key: index
          };

        return (
          <div {...props}>
            {item.name} {item.name === selectedItem.name && 'SELECTED'}
          </div>
        );
      })}
    </div>
 )}
</KeyboardContainer>
```
