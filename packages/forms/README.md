# @zendeskgarden/react-forms

Forms example:

```jsx
<FormContainer>
  {({ getLabelProps, getInputProps, getValidationProps }) => (
    <div>
      <Label {...getLabelProps()}>Accessible Label</Label>
      <Hint>Example hint</Hint>
      <Input {...getInputProps({ placeholder: 'Accessible Input' })} />
      <Message {...getValidationProps({ validation: "error" })}>
        Example error message
      </Message>
    </div>
  )}
</FormContainer>
```
