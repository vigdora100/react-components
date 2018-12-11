```jsx
function Example() {
  const { focusedIndex, selectedIndex, getItemProps, getWrapperProps } = UseRovingTabIndex({ direction: 'vertical' });

  return (
    <div>
      <p>Focused Index: {focusedIndex}</p>
      <p>Selected Index: {selectedIndex}</p>
      <ul {...getWrapperProps()}>
        <li {...getItemProps()}>Item 1 {focusedIndex === 0 && 'focused'} {selectedIndex === 0 && 'selected'}</li>
        <li {...getItemProps()}>Item 2 {focusedIndex === 1 && 'focused'} {selectedIndex === 1 && 'selected'}</li>
        <li {...getItemProps()}>Item 3 {focusedIndex === 2 && 'focused'} {selectedIndex === 2 && 'selected'}</li>
      </ul>
    </div>
  );
}

<Example />;
```
