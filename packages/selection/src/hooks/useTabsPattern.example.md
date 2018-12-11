```jsx
function Example() {
  const { focusedIndex, selectedIndex, getTabListProps, getTabProps } = UseTabsPattern();

  return (
    <div>
      <p>Focused Index: {focusedIndex}</p>
      <p>Selected Index: {selectedIndex}</p>
      <ul {...getTabListProps()}>
        <li {...getTabProps()}>Tab 1 {focusedIndex === 0 && 'focused'}</li>
        <li {...getTabProps()}>Tab 2 {focusedIndex === 1 && 'focused'}</li>
        <li {...getTabProps()}>Tab 3 {focusedIndex === 2 && 'focused'}</li>
      </ul>
    </div>
  );
}

<Example />;
```
