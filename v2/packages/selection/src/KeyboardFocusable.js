import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/** @component */
export default function keyboardFocusable(WrappedComponent) {
  class keyboardFocusable extends PureComponent {
    static propTypes = {
      onFocus: PropTypes.func,
      onBlur: PropTypes.func,
      onMouseDown: PropTypes.func
    };

    constructor(...args) {
      super(...args);

      this.state = {
        isKeyboardFocused: false
      };
    }

    _onFocus = event => {
      const { onFocus } = this.props;
      onFocus && onFocus(event);

      if (!this.isMousedDown) {
        this.setState({ isKeyboardFocused: true });
      }
    };

    _onBlur = event => {
      const { onBlur } = this.props;
      onBlur && onBlur(event);

      this.setState({ isKeyboardFocused: false });
    };

    _onMouseDown = event => {
      const { onMouseDown } = this.props;
      onMouseDown && onMouseDown(event);

      this.isMousedDown = true;
      setTimeout(() => {
        this.isMousedDown = false;
      }, 0);
    };

    render() {
      const { isKeyboardFocused } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onMouseDown={this._onMouseDown}
          focused={isKeyboardFocused} />
      );
    }
  }

  keyboardFocusable.displayName = `keyboardFocusable(${WrappedComponent.displayName || WrappedComponent.name})`;
  return keyboardFocusable;
}
