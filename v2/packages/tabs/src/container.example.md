```jsx
const Wrapper = ({ theme, innerRef, ...other }) => <div {...other} />;
const SelectionContainer = Container({ vertical: true })(Wrapper);

const Item = ({ focused, selected, children, ...other }) => (
  <div {...other} style={{ outline: focused ? 'red auto 5px' : '', backgroundColor: selected ? 'grey' : '' }}>
    {children}
  </div>
);
const SelectableItem = Selection(Item);

<SelectionContainer>
  <SelectableItem>Example 1</SelectableItem>
  <SelectableItem>Example 2</SelectableItem>
  <SelectableItem>Example 3</SelectableItem>
  <SelectableItem>Example 4</SelectableItem>
</SelectionContainer>
```
