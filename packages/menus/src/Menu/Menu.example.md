```jsx
<Grid columns={3} stretched>
  <Menu>
    <HeaderItem>Standard Menu</HeaderItem>
    <Separator />
    <Item>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</Item>
  </Menu>
  <Menu style={{ minWidth: '100%' }}>
    <HeaderItem>Override Min-Width</HeaderItem>
    <Separator />
    <Item>Short</Item>
  </Menu>
  <Menu style={{ maxWidth: 45 }}>
    <HeaderItem>Override Max-Width</HeaderItem>
    <Separator />
    <Item>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</Item>
  </Menu>
</Grid>
```
