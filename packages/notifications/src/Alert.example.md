Content combinations:

```jsx
<Grid columns={1} stretched>
  <Alert>
    <Title>Alert: Standard (Multi-line)</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Paragraph>
  </Alert>
  <Grid columns={2} stretched>
    <Alert>
      <Title>Alert: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Alert>
    <Alert>
      <Close />
      <Title>Alert: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Alert>
    <Alert recessed>
      <Title>Recessed Alert: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Alert>
    <Alert recessed>
      <Close />
      <Title>Recessed Alert: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Alert>
  </Grid>
</Grid>
```

Validaton types:

```jsx
<Grid columns={3} stretched>
  <Alert success>
    <Close />
    <Title>Success Alert</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Alert>
  <Alert warning>
    <Close />
    <Title>Warning Alert</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Alert>
  <Alert error>
    <Close />
    <Title>Error Alert</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Alert>
</Grid>
```
