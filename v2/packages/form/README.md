# @zendeskgarden/react-form

The Form components include items for creating accessible forms: Label, Hint, FormContainer, etc.

## Installation

```bash
# Yarn
yarn add @zendeskgarden/react-form

# NPM
npm install --save @zendeskgarden/react-form
```

## Usage

Use the `FormContainer` component to apply accessibility props to your form elements.

```jsx static
<FormContainer>
    {({ getLabelProps, getInputProps }) => {
        return (
            <FormGroup>
                <Label {...getLabelProps()}>Label Content</Label>
                <Hint>Hint content</Hint>
                <input  {...getInputProps()} />
                <SuccessMessage>Example message</SuccessMessage>
            </FormGroup>
        )
    }}
</FormContainer>
```
