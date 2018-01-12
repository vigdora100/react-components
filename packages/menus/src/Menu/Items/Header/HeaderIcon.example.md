```jsx
const SearchIcon = require('@zendesk/garden-svg-icons/src/14-search.svg');
const InlineSVG = require("inline-svg-react").default;

<Menu>
  <HeaderItem>
    <HeaderIcon>
      <InlineSVG icon={SearchIcon} />
    </HeaderIcon>
    Header Example
  </HeaderItem>
  <Separator />
  <Item>Menu Item 1</Item>
  <Item>Menu Item 2</Item>
  <Item>Menu Item 3</Item>
</Menu>
```
