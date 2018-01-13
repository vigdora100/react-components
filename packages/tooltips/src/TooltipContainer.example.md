The `TooltipContainer` component uses the render-prop pattern to apply events and accessibility props to any element.

Follows the [W3C Tooltip accessibility pattern](https://www.w3.org/TR/wai-aria-practices/#tooltip):

- Applies the necessary `wai-aria` attributes
  - Content within the tooltip is screen-readable using `aria-describedby`
- Making content that contains a custom tooltip focusable and showing the tooltip once focused

### Render Props

- **children** `({ getTriggerProps(), isVisible })`
  - *getTriggerProps* - Applies events and accessibility props to your trigger element
    - Proxies and respects preventDefault() of all props given to method
  - *isVisible* - Visibility of tooltip
- **tooltip** `({ getTooltipProps(), isVisible, placement, outOfBoundaries, scheduleUpdate() })`
  - *getTooltipProps* - Applies events and accessibility props to your tooltip element
    - Proxies and respects preventDefault() of all props given to method
  - *isVisible* - Visibility of tooltip
  - *placement* - Current placement of tooltip. Will reflect any changes in position from screen movement
  - *outOfBoundaries* - Whether the tooltip is escaping it's popper boundary
  - *scheduleUpdate* - Will schedule another render for Popper.js if called. Use if your custom tooltip isn't being displayed in it's correct position.

### Uncontrolled Usage

All state is handled internally in the component. This is what you will want 99% of the time.

```jsx
const { Button } = Garden.Button;

<TooltipContainer
  tooltip={({ getTooltipProps }) => (
    <Tooltip {...getTooltipProps()}>
      Example content
    </Tooltip>
  )}>
  {({ getTriggerProps }) => (
    <Button {...getTriggerProps()}>Hover to trigger tooltip</Button>
  )}
</TooltipContainer>
```

### Controlled Usage

If you need to fully control the state of the container (i.e. if used in another component) you can control the tooltip visibility with the `isVisible` and `onStateChange` props.

```jsx
const { Button } = Garden.Button;

initialState = {
  isVisible: true
};

<TooltipContainer
  isVisible={state.isVisible}
  placement="right"
  onStateChange={(newState) => setState(newState)}
  tooltip={({ getTooltipProps }) => (
    <Tooltip {...getTooltipProps()}>
      Example content
    </Tooltip>
  )}>
  {({ getTriggerProps }) => (
    <Button {...getTriggerProps()}>Hover to trigger tooltip</Button>
  )}
</TooltipContainer>
```

### Custom Elements

You can apply this container to _any_ UI element.

```jsx
const CustomElement = styled.div`
  padding: 25px;
  background-color: grey;
  display: inline-block;
`;

<TooltipContainer
  placement="right"
  tooltip={({ getTooltipProps }) => (
    <LightTooltip {...getTooltipProps({
      size: 'extra-large'
    })}>
      <Title>Bigger Content</Title>
      <p>
        This is an example of of a long form tooltip. Users are able to interact with this tooltip by hovering, selecting, or focusing it's content.
      </p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </p>
    </LightTooltip>
  )}>
  {({ getTriggerProps }) => (
    <CustomElement {...getTriggerProps()}>
      Custom content and placement
    </CustomElement>
  )}
</TooltipContainer>
```

### Disabling Opening on Focus

This example uses a native input, which doesn't open it's tooltip `onFocus`.

```jsx
<TooltipContainer
  tooltip={({ getTooltipProps }) => (
    <Tooltip {...getTooltipProps()}>Example tooltip</Tooltip>
  )}>
  {({ getTriggerProps }) => (
    <input {...getTriggerProps({
      refKey: 'ref', // necessary for native elements
      onFocus: event => event.preventDefault(), // stop our onFocus logic
      placeholder: 'Focus does not trigger me',
      style: { width: '100%' }
    })} />
  )}
</TooltipContainer>
```
