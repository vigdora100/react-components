import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import { utils } from '@zendeskgarden/react-theming';
import { composeEventHandlers } from './utils';
import KEY_CODES from './constants/KEY_CODES';

export class SelectionContainer extends PureComponent {
  /* eslint-disable react/no-unused-prop-types */
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
  /* eslint-enable react/no-unused-prop-types */

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

  _isControlledProp(key) {
    return this.props[key] !== undefined
  }

  /**
   * Used to help retrieve state that can be controlled through props
   */
  _getState = (stateToMerge = this.state) => {
    return Object.keys(stateToMerge).reduce((state, key) => {
      state[key] = this._isControlledProp(key)
        ? this.props[key]
        : stateToMerge[key]
      return state
    }, {});
  };

  /**
   * Used to help set state that can be controlled through props
   */
  _setControlledState = (newState = {}) => {
    const { onStateChange } = this.props;

    if (onStateChange) {
      onStateChange(Object.assign(this._getState(), newState));
    } else {
      this.setState(newState);
    }
  };

  _keyDownEventHandlers = {
    [KEY_CODES.ENTER]: event => {
      event.preventDefault();
      const { focusedIndex } = this._getState();
      this._selectItem(focusedIndex, focusedIndex);
    },
    [KEY_CODES.SPACE]: event => {
      event.preventDefault();
      const { focusedIndex } = this._getState();
      this._selectItem(focusedIndex, focusedIndex);
    },
    [KEY_CODES.END]: event => {
      event.preventDefault();
      this._focusItem(this.items.length - 1);
    },
    [KEY_CODES.HOME]: event => {
      event.preventDefault();
      this._focusItem(0);
    },
    [KEY_CODES.LEFT]: event => {
      const { vertical } = this.props;
      const isRtl = utils.isRtl(this.props);

      if (!vertical) {
        event.preventDefault();

        if (isRtl) {
          this._incrementIndex()
        } else {
          this._decrementIndex();
        }
      }
    },
    [KEY_CODES.RIGHT]: event => {
      const { vertical } = this.props;
      const isRtl = utils.isRtl(this.props);

      if (!vertical) {
        event.preventDefault();

        if (isRtl) {
          this._decrementIndex()
        } else {
          this._incrementIndex();
        }
      }
    },
    [KEY_CODES.UP]: event => {
      const { vertical } = this.props;
      const isRtl = utils.isRtl(this.props);

      if (vertical) {
        event.preventDefault();

        if (isRtl) {
          this._incrementIndex()
        } else {
          this._decrementIndex();
        }
      }
    },
    [KEY_CODES.DOWN]: event => {
      const { vertical } = this.props;
      const isRtl = utils.isRtl(this.props);

      if (vertical) {
        event.preventDefault();

        if (isRtl) {
          this._decrementIndex()
        } else {
          this._incrementIndex();
        }
      }
    }
  };

  _selectItem = (selectedIndex, focusedIndex) => {
    const selectedItem = this.items[selectedIndex];
    this._setControlledState({ selectedItem, focusedIndex });
  };

  _focusItem = focusedIndex => {
    this._setControlledState({ focusedIndex });
  };

  _incrementIndex = () => {
    const { focusedIndex, selectedItem } = this._getState();

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

    this._focusItem(baseIndex < this.items.length - 1 ? baseIndex + 1 : 0);
  };

  _decrementIndex = () => {
    const { focusedIndex, selectedItem } = this._getState();

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

    this._focusItem(baseIndex > 0 ? baseIndex - 1 : this.items.length - 1);
  };

  _getContainerProps = ({ role, tabIndex, onKeyDown, onFocus, onBlur, ...other } = {}) => {
    const { focusedIndex } = this._getState();

    return {
      role: role || 'listbox',
      'aria-activedescendant': this._getItemId(focusedIndex),
      tabIndex: tabIndex || 0,
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const keyHandler = this._keyDownEventHandlers[event.keyCode];
        keyHandler && keyHandler(event);
      }),
      onFocus: composeEventHandlers(onFocus, event => {
        if (!this.containerMouseDown) {
          let selectedIndex = this.items.indexOf(this._getState().selectedItem);

          if (selectedIndex === -1) {
            selectedIndex = 0;
          }

          this._focusItem(selectedIndex);
        }
      }),
      onBlur: composeEventHandlers(onBlur, event => {
        this._focusItem();
      }),
      ...other
    };
  }

  _getItemId = index => typeof index !== 'undefined' ? `${this.props.id}--${index}` : '';

  _getItemProps = ({ item, index, role, onClick, onMouseDown, ...props } = {}) => {
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
      id: this._getItemId(index),
      role: role || 'option',
      'aria-selected': item === this._getState().selectedItem,
      onClick: composeEventHandlers(onClick, event => {
        this._selectItem(index, undefined);
      }),
      onMouseDown: composeEventHandlers(onMouseDown, event => {
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
    const { focusedIndex, selectedItem } = this._getState();
    this.items = [];

    return children({
      getContainerProps: this._getContainerProps,
      getItemProps: this._getItemProps,
      focusedIndex,
      selectedItem
    });
  }
}

export default utils.withTheme(SelectionContainer);
