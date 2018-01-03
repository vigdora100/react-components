```jsx
const Button = Garden.Button.Button;

initialState = {
    selectedIndex: undefined,
    menuItems: ['Menu Item 1', 'Menu Item 2', 'Menu Item 3']
};

<MenuContainer
    placement='right'
    selectedIndex={state.selectedIndex}
    onSelection={selectedIndex => setState({ selectedIndex })}
    content={({ getMenuProps, getMenuItemProps, selectedIndex, highlightedIndex }) => (
        <Menu {...getMenuProps()}>
            <Header>Non-Selectable Header</Header>
            <Separator />
            {
                state.menuItems.map((item, index) => (
                    <Item
                        {...getMenuItemProps({ item })}
                        key={item}
                        focused={highlightedIndex === index}
                        checked={selectedIndex === index}>
                        {item}
                    </Item>
                ))
            }
        </Menu>
    )}>
    {({ getTriggerProps }) => (
        <Button {...getTriggerProps()}>Menu Trigger</Button>
    )}
</MenuContainer>
```
