# @zendeskgarden/react-forms

Forms example:

```jsx
<FormContainer>
  {({ getLabelProps, getInputProps, getMessageProps }) => (
    <div>
      <Label {...getLabelProps()}>Accessible Label</Label>
      <Hint>Example hint</Hint>
      <Input {...getInputProps({ placeholder: 'Accessible Input' })} />
      <Message {...getMessageProps({ validation: "error" })}>
        Example error message
      </Message>
    </div>
  )}
</FormContainer>
```
