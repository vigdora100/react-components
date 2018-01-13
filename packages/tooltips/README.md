# @zendeskgarden/react-tooltips

Presentation and logic containers for elements relating to Tooltips in the Zendesk Design System.

### Logic Components
- `TooltipContainer`
  - Manages positioning and display events and logic using the [render-prop pattern](https://reactpatterns.com/#render-callback)
  - Follows [W3C Tooltip Accessibility Guidelines](https://www.w3.org/TR/wai-aria-practices/#tooltip)

### Presentation Components
- `Tooltip`
  - Used for single-line contextual information
- `LightTooltip`
  - Used for multi-line contextual information

**IMPORTANT**

These tooltips are used to provide aditional context to an element **NOT** to display truncated text. If you need to display truncated text allow the browser to display it in it's native fasion (i.e. `text-overflow`).

## Installation

```bash
# yarn usage
yarn add @zendeskgarden/react-tooltips

# NPM usage
npm install --save @zendeskgarden/react-tooltips
```

## Basic Usage

```jsx static
import Button from '@zendeskgarden/react-buttons/Button';

<TooltipContainer
  tooltip={({ getTooltipProps }) => (
    <Tooltip {...getTooltipProps()}>
      Contextual information
    </Tooltip>
  )}>
  {({ getTriggerProps }) => (
    <Button {...getTriggerProps()}>
      Hover to see tooltip
    </Button>
  )}
</TooltipContainer>
```
