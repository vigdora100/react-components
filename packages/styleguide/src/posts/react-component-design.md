---
path: "/documentation/react-component-design"
date: "2018-01-03"
title: "React Component Design"
---

**DISCLAIMER**

This is more of an internal reflection than a component design section.  The majority of this work involved lerna and tooling/documentation with Stylguidist that is irrelevant for how we actually design the APIs around our components.

For this initial spike I didn't worry about backwards compatability with previous Garden iterations and just did what felt right for a _brand new_ version of the Garden components.

I'm not saying this is the correct way to build the first version of the new components, but it feels like a flexibile way to approach new API designs.

**END DISCLAIMER**

## Overview

With our move toward more granular, individual packages for our React Components, there have been many points raised about how we develop these compoennts beyond just the ability to upgrade freely.

Some examples are: `bundle size, applicable styling, *simple* theming/customization, build requirements, documentation, transparency, etc.`

Moving to micro packages solves some of these issues, but many come down to API design.

These initial components are created with 2 main API principles:

- ### PRESENTATION COMPONENTS
  - All UI should be through granular, presentation components
  - These components are simply styled native elements and support 100% of the native React props
  - Use styled-components to apply default Garden styling with CSS-Modules
    - Allows easier theming and global locale controls (no more per-component `rtl` prop)
- ### RENDER CONTAINERS
  - All advanced state should be managed by Containers that follow the render-prop pattern.
  - These containers will only use native props and events to allow them to work with our presentation components easily, but with other components as well.
  - > The best UI component doesn't render any UI at all

## Presentation Components

By making 100% of our visual components (mostly) stateless we can allow more usages in a wider array of products.  Additionally, by leveraging *ALL* native props products can use these components with any styling library.

These components should be displayed in the documentation and support additional non-native props depending on styling need.

#### Previous Design

```jsx
<TextInput
  label="Label example"
  hint="Hint example"
  onFocus={() => {}}
  onBlur={() => {}}
  {... way to many events}
  validationType="error"
  validationMessage="Error message"
/>
```

This design abstracts away the structure of the HTMl, which is good for consistency, but bad for flexibility.

If you want to add a new validation type with a custom icon, this isn't easily achievable. What about adding a new event handler to the input? Or swapping the input for a date picker?

#### New Design

```jsx
<div>
  <Label>Label Example</Label>
  <Hint>Hint example</Hint>
  <input onFocus={() => {}} onBlur={() => {}} />
  <ErrorMessage>Error message</ErrorMessage>
</div>
```

## Render Containers

By moving all of our advanced, state-management into containers that use the render-prop pattern we can support ANY customization scenario. By ensuring that our containers can only interact with our components through native props and events it ensures that ANY element could take its place.

As a design system we must worry about consistency, but certain levels of customization are needed due to the complex products that we support.

The end-goal of this is to make the easiest path for a developer to use our default Presentation components, but customize as needed.

### Examples

> "I want to replace the Label component in a form with a custom component"

With forms there are accessibility props that should be applied to the label and input. With a granular approach to components this would traditionally mean that we would need to make a `Form` higher-order-component (HOC) that interacts with Label's and Input's.

HOC work well, but they have a "hidden API".  If a developer wants to replicate this functionality they have to look at the source code and figure it out themselves.

With the render-prop pattern, it can handle it for us.

```jsx
<FormContainer>
  {({ getLabelProps, getInputProps }) => (
    <div>
      <CustomLabel {...getLabelProps()}>Label Example</CustomLabel>
      <Hint>Hint example</Hint>
      <input {...getInputProps()} />
      <Message>Message example</Message>
    </div>
  )}
</FormContainer>
```

This is a pretty simple example, but can be applied for more advanced components.

> "I want to change the selected styling of a `Button` in a `ButtonGroup`"

```jsx
<ButtonGroupContainer>
  {({ getContainerProps, getItemProps, selectedIndex, highlightedIndex }) =>
    <ButtonGroup {...getContainerProps()}>
      <Button
        {...getItemProps()}
        selected={selectedIndex === 0}
        focused={highlightedIndex === 0}>
        Item 1
      </Button>
      <CustomButtonComponent
        {...getItemProps()}
        selected={selectedIndex === 1}
        focused={highlightedIndex === 1}>
        Item 2
      </CustomButtonComponent>
      <div
        {...getItemProps()}
        selected={}
        focused={highlightedIndex === 2}>
        Item 3
        {selectedIndex === 2 && 'selected'}
        {highlightedIndex === 2 && 'highlighted'}
      </div>
    </ButtonGroup>
  }
</ButtonGroupContainer>
```

In the example above all of those combinations work since the container component only interacts with native props.
