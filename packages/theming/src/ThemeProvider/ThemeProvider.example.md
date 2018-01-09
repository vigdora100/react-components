All UI components are themable by an unique "component ID". These themes can be nested.

```jsx
const ThemableButton = styled.div`
    margin: 12px;

    ${props => retrieveTheme('button', props)}
`;

const Container = styled.div`
    border: grey solid;
    padding: 24px;
`;

const theme = {
    'button': `color: red; !important`
};

const nestedTheme = {
    'button': `
        color: green !important;
        :hover {
            color: blue !important;
        }
    `
};

<ThemeProvider theme={theme}>
    <Container>
        <ThemableButton>Simple Theme</ThemableButton>
        <Container>
            <ThemeProvider theme={nestedTheme}>
                <ThemableButton>Nested Theme</ThemableButton>
            </ThemeProvider>
        </Container>
    </Container>
</ThemeProvider>
```

This same `ThemeProvider` also interacts with our UI and Container components with the `isRtl` props.

The `withTheme` HOC and `isRtl` util function allow you to interact with the theme provider in any child component.

```jsx
const Container = styled.div`
    border: grey solid;
    padding: 16px;
    margin-top: 16px;

    direction: ${props => isRtl(props) ? 'rtl' : 'ltr'};
`;

<State initialState={{ isRtl: true }}>
  {(state, setState) => (
    <ThemeProvider rtl={state.isRtl}>
        <div>
            <button onClick={() => setState({ isRtl: !state.isRtl })}>
                {state.isRtl ? 'Disable RTL' : 'Enable RTL'}
            </button>
            <Container>This content handles RTL localization asdfasdfasdf</Container>
        </div>
    </ThemeProvider>
  )}
</State>
```
