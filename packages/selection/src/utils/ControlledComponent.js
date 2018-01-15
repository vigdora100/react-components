import { PureComponent } from 'react';
import PropTypes from 'prop-types';

/** @component */
export default class ControlledComponent extends PureComponent {
  static propTypes = {
    onStateChange: PropTypes.func
  };

  isControlledProp = (key) => {
    return this.props.hasOwnProperty(key)
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
    const currentState = this.getControlledState();

    if (onStateChange) {
      const newInternalState = {};
      Object.keys(newState).forEach(key => {
        if (currentState[key] !== newState[key]) {
          newInternalState[key] = newState[key];
        }
      });

      onStateChange(newInternalState);
    } else {
      this.setState(newState);
    }
  };
}
