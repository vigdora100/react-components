```jsx
const items = ['Tab 1', 'Tab 2', 'Tab 3'];

const ExampleItem = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);

<SelectionContainer vertical>
  {({ getItemProps, getContainerProps, focusedIndex, selectedItem }) => (
    <div>
      <p>Focused: {focusedIndex}</p>
      <p>Selected: {selectedItem}</p>
      <div {...getContainerProps()}>
        {items.map((item, index) => (
          <ExampleItem {...getItemProps({
            item,
            key: index,
            focused: focusedIndex === index,
            selected: selectedItem === item
          })}>
            {item}
          </ExampleItem>
        ))}
      </div>
    </div>
  )}
</SelectionContainer>
```
