### Uncontrolled

Simple example..

```jsx
const Button = Garden.Button.Button;
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

initialState = {
  selectedItem: ''
};

<MenuContainer
  onSelect={selectedItem => setState({ selectedItem })}
  menu={({ getMenuProps, getMenuItemProps, focusedIndex, selectedItem }) => (
    <Menu {...getMenuProps()}>
      {items.map((item, index) => (
        <Item {...getMenuItemProps({
          item,
          key: index,
          focused: focusedIndex === index,
          checked: selectedItem === item
        })}>
          {item}
        </Item>
      ))}
    </Menu>
  )}>
  {({ getTriggerProps }) => (
    <div>
      <p>Selected item: {state.selectedItem}</p>
      <Button {...getTriggerProps()}>Trigger</Button>
    </div>
  )}
</MenuContainer>
```

### Controlled Example

Controlled example..

```jsx
const Button = Garden.Button.Button;
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

initialState = {
  selectedItem: '',
  focusedIndex: 0
};

<MenuContainer
  isOpen={state.isOpen}
  focusedIndex={state.focusedIndex}
  onSelect={(selectedItem, otherState) => setState({ selectedItem })}
  onStateChange={(newState) => {
    console.log(newState);
    setState({ isOpen: newState.isOpen, focusedIndex: newState.focusedIndex });
  }}
  menu={({ getMenuProps, getMenuItemProps, focusedIndex, selectedItem }) => (
    <Menu {...getMenuProps()}>
      {items.map((item, index) => (
        <Item {...getMenuItemProps({
          item,
          key: index,
          focused: focusedIndex === index,
          checked: selectedItem === item
        })}>
          {item}
        </Item>
      ))}
    </Menu>
  )}>
  {({ getTriggerProps }) => (
    <div>
      <p>Selected item: {state.selectedItem}</p>
      <Button {...getTriggerProps()}>Trigger</Button>
    </div>
  )}
</MenuContainer>
```
