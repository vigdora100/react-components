The `<Paragraph>` component should be used to wrap multi-line content within a `<Notification>`. Otherwise, no wrapper is necessary.

Content combinations:

```jsx
<Grid columns={1} stretched>
  <Notification>
    <Title>Notification: Standard (Multi-line)</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Paragraph>
  </Notification>
  <Grid columns={2} stretched>
    <Notification>
      <Title>Notification: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Notification>
    <Notification>
      <Close />
      <Title>Notification: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Notification>
    <Notification recessed>
      <Title>Recessed Notification: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Notification>
    <Notification recessed>
      <Close />
      <Title>Recessed Notification: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Notification>
  </Grid>
</Grid>
```

Validaton types:

```jsx
<Grid columns={3} stretched>
  <Notification success>
    <Close />
    <Title>Success Notification</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Notification>
  <Notification warning>
    <Close />
    <Title>Warning Notification</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Notification>
  <Notification error>
    <Close />
    <Title>Error Notification</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Notification>
</Grid>
```
