Content combinations:

```jsx
<Grid columns={1} stretched>
  <DialogNotification>
    <Title>DialogNotification: Standard (Multi-line)</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Paragraph>
  </DialogNotification>
  <Grid columns={2} stretched>
    <DialogNotification>
      <Title>DialogNotification: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </DialogNotification>
    <DialogNotification>
      <Close />
      <Title>DialogNotification: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </DialogNotification>
    <DialogNotification recessed>
      <Title>Recessed DialogNotification: Standard (One-line)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </DialogNotification>
    <DialogNotification recessed>
      <Close />
      <Title>Recessed DialogNotification: Standard (Closable)</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </DialogNotification>
  </Grid>
</Grid>
```

Validaton types:

```jsx
<Grid columns={3} stretched>
  <DialogNotification success>
    <Close />
    <Title>Success DialogNotification</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </DialogNotification>
  <DialogNotification warning>
    <Close />
    <Title>Warning DialogNotification</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </DialogNotification>
  <DialogNotification error>
    <Close />
    <Title>Error DialogNotification</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </DialogNotification>
</Grid>
```
