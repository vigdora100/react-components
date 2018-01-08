import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { utils as themingUtils } from '@zendeskgarden/react-theming';
import { utils, KEY_CODES } from '@zendeskgarden/react-selection';

export class SelectionContainer extends PureComponent {
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
    /** Callback for all state objects. Used when in 'controlled' mode. */
    onStateChange: PropTypes.func,
    /** The root ID to use for descendants. A unique ID is created if none is provided. */
    id: PropTypes.string
  };
  /** eslint-enable react/no-unused-prop-types */

  static defaultProps = {
    id: `garden-${uuid()}`
  };

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
    this.setControlledState({ focusedIndex });
  };

  incrementIndex = () => {
    const { focusedIndex, selectedItem } = this.getState();

    let baseIndex;

    if (typeof focusedIndex === 'undefined' || focusedIndex === -1) {
      if (selectedItem) {
        baseIndex = this.items.indexOf(selectedItem);
      } else {
        baseIndex = -1;
      }
    } else {
      baseIndex = focusedIndex;
    }

    this.focusItem(baseIndex < this.items.length - 1 ? baseIndex + 1 : 0);
  };

  decrementIndex = () => {
    const { focusedIndex, selectedItem } = this.getState();

    let baseIndex;

    if (typeof focusedIndex === 'undefined' || focusedIndex === -1) {
      if (selectedItem) {
        baseIndex = this.items.indexOf(selectedItem);
      } else {
        baseIndex = this.items.length;
      }
    } else {
      baseIndex = focusedIndex;
    }

    this.focusItem(baseIndex > 0 ? baseIndex - 1 : this.items.length - 1);
  };

  getContainerProps = ({ role, tabIndex, onKeyDown, onFocus, onBlur, ...other } = {}) => {
    const { focusedIndex } = this.getState();

    return {
      role: role || 'listbox',
      'aria-activedescendant': this.getItemId(focusedIndex),
      tabIndex: tabIndex || 0,
      onKeyDown: utils.composeEventHandlers(onKeyDown, event => {
        const keyHandler = this.keyDownEventHandlers[event.keyCode];
        keyHandler && keyHandler(event);
      }),
      onFocus: utils.composeEventHandlers(onFocus, event => {
        if (!this.containerMouseDown) {
          let selectedIndex = this.items.indexOf(this.getState().selectedItem);

          if (selectedIndex === -1) {
            selectedIndex = 0;
          }

          this.focusItem(selectedIndex);
        }
      }),
      onBlur: utils.composeEventHandlers(onBlur, event => {
        this.focusItem();
      }),
      ...other
    };
  }

  getItemId = index => typeof index !== 'undefined' ? `${this.props.id}--${index}` : '';

  getItemProps = ({ item, index, role, onClick, onMouseDown, ...props } = {}) => {
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
      id: this.getItemId(index),
      role: role || 'option',
      'aria-selected': item === this.getState().selectedItem,
      onClick: utils.composeEventHandlers(onClick, event => {
        this.selectItem(index);
        this.focusItem(undefined);
      }),
      onMouseDown: utils.composeEventHandlers(onMouseDown, event => {
        this.containerMouseDown = true;

        setTimeout(() => {
          this.containerMouseDown = false;
        }, 0);
      }),
      ...props
    };
  };

  render() {
    const { children } = this.props;
    const { focusedIndex, selectedItem } = this.getState();
    this.items = [];

    return children({
      getContainerProps: this.getContainerProps,
      getItemProps: this.getItemProps,
      focusedIndex,
      selectedItem
    });
  }
}

export default themingUtils.withTheme(SelectionContainer);
