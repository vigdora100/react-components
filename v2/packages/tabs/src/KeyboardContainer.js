import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { utils as themingUtils } from '@zendeskgarden/react-theming';
import { utils, KEY_CODES } from '@zendeskgarden/react-selection';

export class KeyboardContainer extends PureComponent {
  /** eslint-disable react/no-unused-prop-types */
  static propTypes = {
    /**
     * Function that is provided:
     * `getContainerProps, getItemProps, focusedIndex, selectedItem`
     */
    children: PropTypes.func.isRequired,
    /**
     * Whether the up/down or left/right arrow keys
     * should be used for keyboard navigation
     */
    vertical: PropTypes.bool,
    focusedIndex: PropTypes.number,
    selectedItem: PropTypes.any,
    onStateChange: PropTypes.func
  };
  /** eslint-enable react/no-unused-prop-types */

  constructor(...args) {
    super(...args);

    this.state = {
      focusedIndex: undefined,
      selectedItem: undefined
    };
  }

  isControlledProp(key) {
    return this.props[key] !== undefined
  }

  /**
   * Used to help retrieve state that can be controlled through props
   */
  getState = (stateToMerge = this.state) => {
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

    if (onStateChange) {
      onStateChange(Object.assign(this.state, newState));
    } else {
      this.setState(newState);
    }
  };

  keyDownEventHandlers = {
    [KEY_CODES.ENTER]: event => {
      event.preventDefault();
      this.selectItem(this.getState().focusedIndex);
    },
    [KEY_CODES.SPACE]: event => {
      event.preventDefault();
      this.selectItem(this.getState().focusedIndex);
    },
    [KEY_CODES.END]: event => {
      event.preventDefault();
      this.focusItem(this.items.length - 1);
    },
    [KEY_CODES.HOME]: event => {
      event.preventDefault();
      this.focusItem(0);
    },
    [KEY_CODES.LEFT]: event => {
      const { vertical } = this.props;
      const isRtl = themingUtils.isRtl(this.props);

      if (!vertical) {
        event.preventDefault();

        if (isRtl) {
          this.incrementIndex()
        } else {
          this.decrementIndex();
        }
      }
    },
    [KEY_CODES.RIGHT]: event => {
      const { vertical } = this.props;
      const isRtl = themingUtils.isRtl(this.props);

      if (!vertical) {
        event.preventDefault();

        if (isRtl) {
          this.decrementIndex()
        } else {
          this.incrementIndex();
        }
      }
    },
    [KEY_CODES.UP]: event => {
      const { vertical } = this.props;
      const isRtl = themingUtils.isRtl(this.props);

      if (vertical) {
        event.preventDefault();

        if (isRtl) {
          this.incrementIndex()
        } else {
          this.decrementIndex();
        }
      }
    },
    [KEY_CODES.DOWN]: event => {
      const { vertical } = this.props;
      const isRtl = themingUtils.isRtl(this.props);

      if (vertical) {
        event.preventDefault();

        if (isRtl) {
          this.decrementIndex()
        } else {
          this.incrementIndex();
        }
      }
    }
  };

  selectItem = selectedIndex => {
    const selectedItem = this.items[selectedIndex];
    this.setControlledState({ selectedItem });
  };

  focusItem = focusedIndex => {
    const itemReference = this.itemReferences[focusedIndex];

    if (itemReference) {
      itemReference.focus();
    }
  };

  incrementIndex = () => {
    const { focusedIndex } = this.getState();

    if (typeof focusedIndex === 'undefined') {
      this.focusItem(0);
    } else {
      this.focusItem(focusedIndex < this.items.length - 1 ? focusedIndex + 1 : 0);
    }
  };

  decrementIndex = () => {
    const { focusedIndex } = this.getState();

    if (typeof focusedIndex === 'undefined') {
      this.focusItem(this.items.length - 1);
    } else {
      this.focusItem(focusedIndex > 0 ? focusedIndex - 1 : this.items.length - 1);
    }
  };

  getItemTabIndex = (tabIndex, index) => {
    const { focusedIndex } = this.getState();
    const isFocused = focusedIndex === index;

    if (typeof tabIndex !== 'undefined') {
      return tabIndex;
    }

    if (isFocused) {
      return 0;
    }

    if (typeof focusedIndex === 'undefined' && index === 0) {
      return 0;
    }

    return -1;
  }

  getContainerProps = ({ role, ...other } = {}) => {
    return {
      role: role || 'radiogroup',
      ...other
    };
  }

  getItemProps = ({ item, index, refKey = 'innerRef', role, tabIndex, onFocus, onBlur, onKeyDown, onMouseDown, ...props } = {}) => {
    if (typeof item === 'undefined') {
      throw new Error('"item" must be defined');
    }

    if (index === undefined) {
      this.items.push(item);
      index = this.items.indexOf(item);
    } else {
      this.items[index] = item
    }

    return {
      tabIndex: this.getItemTabIndex(tabIndex, index),
      [refKey]: reference => {
        this.itemReferences[index] = reference;
      },
      onFocus: utils.composeEventHandlers(onFocus, event => {
        this.setControlledState({ focusedIndex: index });
      }),
      onKeyDown: utils.composeEventHandlers(onKeyDown, event => {
        const keyHandler = this.keyDownEventHandlers[event.keyCode];
        keyHandler && keyHandler(event);
      }),
      onMouseDown: utils.composeEventHandlers(onMouseDown, event => {
        this.selectItem(index);
      }),
      role: role || 'radio',
      'aria-checked': item === this.getState().selectedItem,
      ...props
    };
  };

  render() {
    const { children } = this.props;
    const { focusedIndex, selectedItem } = this.getState();
    this.items = [];
    this.itemReferences = [];

    return children({
      getContainerProps: this.getContainerProps,
      getItemProps: this.getItemProps,
      focusedIndex,
      selectedItem
    });
  }
}

export default themingUtils.withTheme(KeyboardContainer);
