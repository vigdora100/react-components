The `Tooltip` component is meant for use with **single-line** contextual information.

If you are showing **multi-line** content, use the `LightTooltip` with a `Title` component.

```jsx
<Grid columns={2} stretched>
  <Tooltip data-placement="top">Some contextual information</Tooltip>
  <Tooltip data-placement="right" size="medium">This is some slightly longer contextual information.</Tooltip>
</Grid>
```

### Sizes

```jsx
<Grid columns={4} stretched>
  <Tooltip>Small (default)</Tooltip>
  <Tooltip size="medium">Medium</Tooltip>
  <Tooltip size="large">Large</Tooltip>
  <Tooltip size="extra-large">Extra-Large</Tooltip>
</Grid>
```
