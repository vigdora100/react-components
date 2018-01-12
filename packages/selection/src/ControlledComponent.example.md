```jsx
class ExampleContainer extends ControlledComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      count: 0
    };

    this.getButtonProps = this.getButtonProps.bind(this);
  }

  getButtonProps(props) {
    const { count } = this.getControlledState();

    return {
      ...props,
      onClick: event => {
        this.setControlledState({ count: count + 1 });
      }
    }
  }

  render() {
    const { children } = this.props;
    const { count } = this.getControlledState();

    return children({
      count,
      getButtonProps: this.getButtonProps
    });
  }
}

initialState = {
  count: 4
};

<div>
  <Grid columns={2} stretched>
    <ExampleContainer>
      {({ count, getButtonProps }) => (
        <div>
          <p>Count: {count && count.toString()}</p>
          <button {...getButtonProps()}>Uncontrolled increment</button>
        </div>
      )}
    </ExampleContainer>
    <ExampleContainer count={state.count} onStateChange={newState => setState(newState)}>
      {({ count, getButtonProps }) => (
        <div>
          <p>Count: {count && count.toString()}</p>
          <button {...getButtonProps()}>Controlled increment</button>
        </div>
      )}
    </ExampleContainer>
  </Grid>

</div>
```
