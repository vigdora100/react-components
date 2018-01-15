This container applies the necessary logic and accessibility props for a ButtonGroup. It can be used as a controlled and un-controlled container.

The render-prop provides:

- `getButtonGroupProps()` - apply to the container of your buttons
- `getButtonProps({ item: required })` - apply to each individual button
- `highlightedIndex`
- `selectedItem`

```jsx
const items = ['Group Item 1', 'Group Item 2', 'Group Item 3', 'Group Item 4'];

initialState = {
  selectedItem: items[1]
};

<ButtonGroupContainer
  focusedIndex={state.focusedIndex}
  selectedItem={state.selectedItem}
  onStateChange={newState => setState(newState)}>
 {({ getButtonGroupProps, getButtonProps, focusedIndex, selectedItem }) => (
    <ButtonGroup {...getButtonGroupProps()}>
      {items.map((item, index) => (
        <Button {...getButtonProps({
          item,
          key: index,
          selected: selectedItem === item,
          focused: focusedIndex === index
        })}>
          {item}
        </Button>
      ))}
    </ButtonGroup>
 )}
</ButtonGroupContainer>
```
