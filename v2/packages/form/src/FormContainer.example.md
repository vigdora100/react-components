```jsx
<FormContainer>
    {({ getLabelProps, getInputProps }) => {
        return (
            <FormGroup>
                <Label {...getLabelProps()}>Example Label</Label>
                <Hint>Example Hint</Hint>
                <input  {...getInputProps()} />
                <Message>Example message content</Message>
            </FormGroup>
        )
    }}
</FormContainer>
```
