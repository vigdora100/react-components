### Uncontrolled Example

```jsx
const Button = Garden.Button.Button;

<MenuContainer
  onSelect={selectedItem => alert(selectedItem)}
  menu={({ getMenuProps, getMenuItemProps, focusedIndex }) => (
    <Menu {...getMenuProps()}>
      <Item {...getMenuItemProps({
        item: 'item-1',
        focused: focusedIndex === 0
      })}>
        Example Item 1
      </Item>
      <Item {...getMenuItemProps({
        item: 'item-2',
        focused: focusedIndex === 1
      })}>
        Example Item 2
      </Item>
    </Menu>
  )}>
  {({ getTriggerProps }) => (
    <Button {...getTriggerProps()}>Default Menu</Button>
  )}
</MenuContainer>
```

### Menu Placement

```jsx
const Button = Garden.Button.Button;
const items = ['Example Item 1', 'Example Item 2'];

const PlacementMenu = props => (
  <MenuContainer
    {...props}
    menu={({ getMenuProps, getMenuItemProps, focusedIndex }) => (
      <Menu {...getMenuProps()}>
        {items.map((item, index) => (
          <Item {...getMenuItemProps({
            item,
            key: index,
            focused: focusedIndex === index
          })}>
            {item}
          </Item>
        ))}
      </Menu>
    )}>
    {({ getTriggerProps }) => (
      <Button {...getTriggerProps()}>{props.placement || 'default'}</Button>
    )}
  </MenuContainer>
);

<Grid columns={4} stretched>
  <PlacementMenu placement="right-start" />
  <PlacementMenu placement="bottom-start" />
  <PlacementMenu placement="top-start" />
  <PlacementMenu placement="left-start" />
  <PlacementMenu placement="right" />
  <PlacementMenu placement="bottom" />
  <PlacementMenu placement="top" />
  <PlacementMenu placement="left" />
  <PlacementMenu placement="right-end" />
  <PlacementMenu placement="bottom-end" />
  <PlacementMenu placement="top-end" />
  <PlacementMenu placement="left-end" />
</Grid>
```

### Scrollable area example

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
      <div style={{ overflowY: 'auto', height: 200 }}>
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
      </div>
      <Separator />
      <AddItem {...getMenuItemProps({
            item: 'Add',
            focused: focusedIndex === items.length,
            checked: selectedItem === 'Add'
          })}>Test Add</AddItem>
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

Beatles example

```jsx
const Button = Garden.Button.Button;

initialState = {
  selectedItem: undefined,
  beatles: [
    { name: 'John', email: 'john@beatles.com' },
    { name: 'Paul', email: 'paul@beatles.com' },
    { name: 'George', email: 'george@beatles.com' },
    { name: 'Ringo', email: 'ringo@beatles.com' },
  ]
};

<MenuContainer
  onSelect={selectedItem => {
    if (selectedItem !== 'Add') {
      setState({ selectedItem });
    } else {
      const newBeatles = state.beatles.slice();
      newBeatles.push({ name: 'New Beatle', email: `beatle${newBeatles.length}@email.com`})
      setState({ beatles: newBeatles, selectedItem: undefined })
    }
  }}
  menu={({ getMenuProps, getMenuItemProps, focusedIndex }) => (
    <Menu {...getMenuProps()}>
      <HeaderItem>The Beatles</HeaderItem>
      <Separator />
      {state.beatles.map((person, index) => (
        <MediaItem {...getMenuItemProps({
          item: person,
          key: index,
          focused: focusedIndex === index,
          checked: state.selectedItem && state.selectedItem.email === person.email
        })}>
          <MediaFigure>
            <img src="http://placeskull.com/32/32/37B8AF" />
          </MediaFigure>
          <MediaBody>
            {person.name}
            <ItemMeta>{person.email}</ItemMeta>
          </MediaBody>
        </MediaItem>
      ))}
      <Separator />
      <AddItem {...getMenuItemProps({
          item: 'Add',
          focused: focusedIndex === state.beatles.length
        })}>
        Test Add
      </AddItem>
    </Menu>
  )}>
  {({ getTriggerProps }) => (
    <Button {...getTriggerProps()}>Trigger</Button>
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
    setState(newState);
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
