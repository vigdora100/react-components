import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from './utils';

export default class KeyboardFocusContainer extends PureComponent {
    static propTypes = {
        /**
         * A function that receives: ({ keyboardFocused: bool, onBlur: eventProxy,
         * onFocus: eventProxy, onMouseDown: eventProxy })
         */
        children: PropTypes.func.isRequired
    };

    constructor(props, context) {
      super(props, context);

      this.state = {
        keyboardFocused: false
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
        this.setState({ keyboardFocused: true });
      }
    };

    onBlur = event => {
      this.setState({ keyboardFocused: false });
    }

    getFocusProps = ({ onBlur, onFocus, onMouseDown, ...otherProps } = {}) => {
      return {
        onBlur: utils.composeEventHandlers(onBlur, this.onBlur),
        onFocus: utils.composeEventHandlers(onFocus, this.onFocus),
        onMouseDown: utils.composeEventHandlers(onMouseDown, this.onMouseDown),
        ...otherProps
      };
    };

    render() {
      const { children } = this.props;
      const { keyboardFocused } = this.state;

      return children({
        getFocusProps: this.getFocusProps,
        keyboardFocused
      });
    }
  }
