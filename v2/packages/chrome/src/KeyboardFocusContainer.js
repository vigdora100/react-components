import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class KeyboardFocusContainer extends PureComponent {
    static propTypes = {
        children: PropTypes.func.isRequired
    };

    constructor(props, context) {
      super(props, context);

      this.state = {
        isKeyboardFocused: false
      };

      this.keyboardFocus = true;
    }

    onMouseDown = event => {
      this.keyboardFocus = false;
      setTimeout(() => {
        this.keyboardFocus = true;
      }, 0);
    }

    onFocus = event => {
      if (this.keyboardFocus) {
        this.setState({ isKeyboardFocused: true });
      }
    };

    onBlur = event => {
      this.setState({ isKeyboardFocused: false });
    }

    render() {
      const { children } = this.props;
      const { isKeyboardFocused } = this.state;

      return children({
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          onMouseDown: this.onMouseDown,
          isKeyboardFocused
      });
    }
  }
