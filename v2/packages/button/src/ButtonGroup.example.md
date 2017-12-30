The `ButtonGroup` component by itself is a simple, presentation component without any selection logic. For real-world usages it should be used with the `SelectionContainer` in `@zendeskgarden/react-selection`. This container applies the necessary logic and accessibility props. It can be used as a controlled and un-controlled container.

```jsx
const SelectionContainer = Garden.Selection.SelectionContainer;

initialState = {
    selectedIndex: 1,
    items: [{
        name: 'Group Item 1'
    }, {
        name: 'Group Item 2'
    }, {
        name: 'Group Item 3'
    }, {
        name: 'Group Item 4'
    }]
};

<SelectionContainer
    selectedIndex={state.selectedIndex}
    onSelection={selectedIndex => setState({ selectedIndex })}>
    {({ getItemProps, getContainerProps, highlightedIndex, selectedIndex }) => (
        <ButtonGroup {...getContainerProps()}>
            {state.items.map((item, index) => (
                <Button
                    {...getItemProps({
                        item,
                        index
                    })}
                    key={index}
                    focused={highlightedIndex === index}
                    selected={selectedIndex === index}>
                    {item.name}
                </Button>
            ))}
        </ButtonGroup>
    )}
</SelectionContainer>
```
