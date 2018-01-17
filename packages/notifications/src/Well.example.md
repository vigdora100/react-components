The `<Paragraph>` component should be used to wrap multi-line content within a `<Well>`. Otherwise, no wrapper is necessary.

Content combinations:

```jsx
<Grid columns={1} stretched>
  <Well>
    <Title>Well: Standard (Multi-line)</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Paragraph>
  </Well>
  <Grid columns={2} stretched>
    <Well>
      <Title>Well: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Well>
    <Well>
      <Close />
      <Title>Well: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Well>
    <Well recessed>
      <Title>Recessed Well: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Well>
    <Well recessed>
      <Close />
      <Title>Recessed Well: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Well>
  </Grid>
</Grid>
```

Validaton types:

```jsx
<Grid columns={3} stretched>
  <Well success>
    <Close />
    <Title>Success Well</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Well>
  <Well warning>
    <Close />
    <Title>Warning Well</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Well>
  <Well error>
    <Close />
    <Title>Error Well</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Well>
</Grid>
```
