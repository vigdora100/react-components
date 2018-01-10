Meant for use with text

#### Colors

```jsx
<Grid columns={6} stretched>
  <Badge>Default color</Badge>
  <Badge color="light">Light color</Badge>
  <Badge color="dark">Dark color</Badge>
  <Badge color="error">Error color</Badge>
  <Badge color="warning">Warning color</Badge>
  <Badge color="success">Success color</Badge>
</Grid>
```

#### Sizes

```jsx
<Grid columns={3} stretched>
  <Badge size="small">Small Size</Badge>
  <Badge>Default Size</Badge>
  <Badge size="large">Large Size</Badge>
</Grid>
```

#### Removable

```jsx
<Badge>Default Size <Remove /></Badge>
```

#### Avatars

Avatars are not shown for `small` Badge's

```jsx
<Grid columns={3} stretched>
  <Badge size="small">
    <Avatar>
      <img src="http://placeskull.com/16/16/03363d" />
    </Avatar>
    Small Avatar
  </Badge>
  <Badge>
    <Avatar>
      <img src="http://placeskull.com/16/16/03363d" />
    </Avatar>
    Default Avatar
  </Badge>
  <Badge size="large">
    <Avatar>
      <img src="http://placeskull.com/16/16/03363d" />
    </Avatar>
    Large Avatar
  </Badge>
</Grid>
```

#### States

```jsx
<Grid columns={2} stretched>
  <Badge>Default</Badge>
  <Badge focused>Focused Badge</Badge>
</Grid>
```
