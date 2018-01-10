Meant for use with text

#### Colors

```jsx
<Grid columns={6} stretched>
  <Tag>Default color</Tag>
  <Tag color="light">Light color</Tag>
  <Tag color="dark">Dark color</Tag>
  <Tag color="error">Error color</Tag>
  <Tag color="warning">Warning color</Tag>
  <Tag color="success">Success color</Tag>
</Grid>
```

#### Sizes

```jsx
<Grid columns={3} stretched>
  <Tag size="small">Small Size</Tag>
  <Tag>Default Size</Tag>
  <Tag size="large">Large Size</Tag>
</Grid>
```

#### Removable

```jsx
<Tag>Default Size <Remove /></Tag>
```

#### Avatars

Avatars are not shown for `small` Tag's

```jsx
<Grid columns={3} stretched>
  <Tag size="small">
    <Avatar>
      <img src="http://placeskull.com/16/16/03363d" />
    </Avatar>
    Small Avatar
  </Tag>
  <Tag>
    <Avatar>
      <img src="http://placeskull.com/16/16/03363d" />
    </Avatar>
    Default Avatar
  </Tag>
  <Tag size="large">
    <Avatar>
      <img src="http://placeskull.com/16/16/03363d" />
    </Avatar>
    Large Avatar
  </Tag>
</Grid>
```

#### States

```jsx
<Grid columns={2} stretched>
  <Tag>Default</Tag>
  <Tag focused>Focused Tag</Tag>
</Grid>
```
