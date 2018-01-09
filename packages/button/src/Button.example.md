By default, the `<Button>` component contains an internal `KeyboardFocusContainer` wrapper that applies focused styling *ONLY* on keyboard focus.  This can always be overriden by providing the `focus` prop.

```jsx
<Grid columns={4} stretched>
    <Button>Default Example</Button>
    <Button danger>Danger Example</Button>
</Grid>
```

Sizes:

```jsx
<div>
    <Grid columns={3} stretched>
        <Button>Default</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
    </Grid>
    <br />
    <Grid columns={1} stretched>
        <Button stretched>Stretched</Button>
    </Grid>
</div>
```

States:

```jsx
<Grid columns={4} stretched>
    <Button>Default</Button>
    <Button hovered>Hovered</Button>
    <Button focused>Focused</Button>
    <Button active>Active</Button>
</Grid>
```
