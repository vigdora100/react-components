import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { utils } from '@zendeskgarden/react-theming';
import { KEY_CODES } from '@zendeskgarden/react-selection';

const selectionContainerHOC = (WrappedComponent, { vertical } = {}) => {
  class selectionContainer extends PureComponent {
    static propTypes = {
      tabIndex: PropTypes.number,
      focusedIndex: PropTypes.number,
      selectedIndex: PropTypes.string,
      onStateChange: PropTypes.func,
      children: PropTypes.node,
      id: PropTypes.string
    };

    static defaultProps = {
      tabIndex: 0,
      role: 'listbox',
      id: `garden-${uuid()}`
    };

    constructor(...args) {
      super(...args);

      this.state = {
        focusedIndex: undefined,
        selectedIndex: undefined
      }
    }

    _keyDownEventHandlers = {
      [KEY_CODES.ENTER]: event => {
        event.preventDefault();
        this._setControlledState({ selectedIndex: this._getState().focusedIndex });
      },
      [KEY_CODES.SPACE]: event => {
        event.preventDefault();
        this._setControlledState({ selectedIndex: this._getState().focusedIndex });
      },
      [KEY_CODES.END]: event => {
        event.preventDefault();
        this._setControlledState({ focusedIndex: this._numSelectables });
      },
      [KEY_CODES.HOME]: event => {
        event.preventDefault();
        this._setControlledState({ focusedIndex: 0 });
      },
      [KEY_CODES.LEFT]: event => {
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
        onStateChange(Object.assign(this.state, newState));
      } else {
        this.setState(newState);
      }
    };

    _incrementIndex = () => {
      const { focusedIndex, selectedIndex } = this._getState();

      let baseIndex;

      if (typeof focusedIndex === 'undefined') {
        if (selectedIndex) {
          baseIndex = selectedIndex;
        } else {
          baseIndex = -1;
        }
      } else {
        baseIndex = focusedIndex;
      }

      this._setControlledState({ focusedIndex: baseIndex < this._numSelectables ? baseIndex + 1 : 0 });
    };

    _decrementIndex = () => {
      const { focusedIndex, selectedIndex } = this._getState();

      let baseIndex;

      if (typeof focusedIndex === 'undefined' || focusedIndex === -1) {
        if (selectedIndex) {
          baseIndex = selectedIndex;
        } else {
          baseIndex = this.items.length;
        }
      } else {
        baseIndex = focusedIndex;
      }

      this._setControlledState({ focusedIndex: baseIndex > 0 ? baseIndex - 1 : this._numSelectables });
    };

    getItemId = index => typeof index !== 'undefined' ? `${this.props.id}--${index}` : '';

    _renderChildren = () => {
      const { children } = this.props;
      const { focusedIndex, selectedIndex } = this._getState();
      this._numSelectables = -1;

      return React.Children.map(children, (child, index) => {
        if (!child.type.isSelection) {
          return child;
        }

        this._numSelectables++;
        let selectionIndex = this._numSelectables;

        return React.cloneElement(child, {
          focused: selectionIndex === focusedIndex,
          selected: selectionIndex === selectedIndex,
          id: this.getItemId(selectionIndex),
          onClick: event => {
            this._setControlledState({
              selectedIndex: selectionIndex,
              focusedIndex: undefined
            });
          }
        });
      });
    }

    _onKeyDown = event => {
      const { onKeyDown } = this.props;
      onKeyDown && onKeyDown(event);

      const keyHandler = this._keyDownEventHandlers[event.keyCode];
      keyHandler && keyHandler(event);
    }

    _onBlur = event => {
      const { onBlur } = this.props;
      onBlur && onBlur(event);

      this._setControlledState({ focusedIndex: undefined });
    };

    _onFocus = event => {
      if (!this._containerMousedDown) {
        let { selectedIndex } = this._getState();

        if (typeof selectedIndex === 'undefined') {
          selectedIndex = 0;
        }

        this._setControlledState({ focusedIndex: selectedIndex });
      }
    };

    _onMouseDown = event => {
      const { onMouseDown } = this._getState();
      onMouseDown && onMouseDown(event);

      this._containerMousedDown = true;
      setTimeout(() => {
        this._containerMousedDown = false;
      }, 0);
    };

    render() {
      const { focusedIndex } = this._getState();

      return (
        <WrappedComponent
          {...this.props}
          onKeyDown={this._onKeyDown}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          onMouseDown={this._onMouseDown}
          aria-activedescendant={this.getItemId(focusedIndex)}>
          {this._renderChildren()}
        </WrappedComponent>
      );
    };
  };

  selectionContainer.displayName = `selectionContainer(${WrappedComponent.displayName || WrappedComponent.name})`;
  return selectionContainer;
};

const selectionContainer = options => (WrappedComponent) => utils.withTheme(selectionContainerHOC(WrappedComponent, options));
export default selectionContainer;
