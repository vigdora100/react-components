import { PureComponent } from 'react';

export default class ControlledComponentContainer extends PureComponent {
  isControlledProp = (key) => {
    return this.props[key] !== undefined
  }

  /**
   * Used to help retrieve state that can be controlled through props
   */
  getControlledState = (stateToMerge = this.state) => {
    return Object.keys(stateToMerge).reduce((state, key) => {
      state[key] = this.isControlledProp(key)
        ? this.props[key]
        : stateToMerge[key]
      return state
    }, {});
  };

  /**
   * Used to help set state that can be controlled through props
   */
  setControlledState = (newState = {}) => {
    const { onStateChange } = this.props;

    // if (onSelect && newState.hasOwnProperty('selectedItem')) {
    //   onSelect(newState.selectedItem, Object.assign(this._getState(), newState));
    // }

    if (onStateChange) {
      // onStateChange(Object.assign(this._getState(), newState));
      onStateChange(newState);
    }

    this.setState(state => {
      state = {};

      Object.keys(newState).forEach(key => {
        if (!this.isControlledProp(key)) {
          state[key] = newState[key];
        }
      });

      return state;
    });
  };

  render() {
    const { children } = this.props;

    return children({
      state: this.getControlledState(),
      setState: this.setControlledState
    });
  }
}
