```jsx
const Button = Garden.Button.Button;
const PrimaryButton = Garden.Button.PrimaryButton;
const AnchorButton = Garden.Button.AnchorButton;

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
    <div>
        <Grid columns={3} stretched>
            <Button>Example</Button>
            <PrimaryButton>Example</PrimaryButton>
            <AnchorButton>Example</AnchorButton>
        </Grid>
        <p>Nested theming</p>
        <ThemeProvider theme={nestedTheme}>
            <Grid columns={3} stretched>
                <Button>Example</Button>
                <PrimaryButton>Example</PrimaryButton>
                <AnchorButton>Example</AnchorButton>
            </Grid>
        </ThemeProvider>
    </div>
</ThemeProvider>
```
