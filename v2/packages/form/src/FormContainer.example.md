This Container component applies accessibility attributes to related Labels and Inputs.

```jsx
const Input = Garden.Input.Input;

<FormContainer>
    {({ getLabelProps, getInputProps }) => {
        return (
            <FormGroup>
                <Label {...getLabelProps()}>Example Label</Label>
                <Hint>Example Hint</Hint>
                <Input {...getInputProps()} />
                <Message>Example message content</Message>
            </FormGroup>
        )
    }}
</FormContainer>
```
