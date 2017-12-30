```jsx
const items = [{
    name: 'Group Item 1'
}, {
    name: 'Group Item 2'
}, {
    name: 'Group Item 3'
}, {
    name: 'Group Item 4'
}];

<SelectionContainer vertical>
    {({ getItemProps, getContainerProps, highlightedIndex, selectedIndex }) => (
        <div {...getContainerProps()}>
            {items.map((item, index) => (
                <div
                    {...getItemProps({
                        item,
                        index
                    })}
                    key={index}>
                    {item.name}
                    {highlightedIndex === index && 'Focused'}
                    {selectedIndex === index && 'Selected'}
                </div>
            ))}
        </div>
    )}
</SelectionContainer>
```
