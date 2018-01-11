import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Manager, Popper, Target } from 'react-popper';
import { SelectionContainer, composeEventHandlers, KEY_CODES } from 'garden-react-selection';

export default class MenuContainer extends PureComponent {
  static propTypes = {
    focusedIndex: PropTypes.number,
    isOpen: PropTypes.bool,
    /** Callback for all state objects. Used when in 'controlled' mode. */
    onStateChange: PropTypes.func,
    onSelect: PropTypes.func,
    /** The root ID to use for descendants. A unique ID is created if none is provided. */
    id: PropTypes.string,
    children: PropTypes.func,
    placement: PropTypes.string
  };

  static defaultProps = {
    id: `garden-${uuid()}`,
    placement: 'bottom-start'
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isOpen: false,
      focusedIndex: undefined
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this._handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this._handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this._getState();

    if (isOpen && !prevState.isOpen) {
      this.menuRef && this.menuRef.focus();
    }

    if (!isOpen && prevState.isOpen) {
      this.triggerRef && this.triggerRef.focus();
    }
  }

  _handleClickOutside = (event) => {
    if (this.menuRef && !this.menuRef.contains(event.target)) {
      this._setControlledState({ isOpen: false });
    }
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

  _getTriggerId = () => `garden-${this.props.id}--trigger`;

  getTriggerProps = ({ id, refKey = 'innerRef', ref, role, onKeyDown, onClick, ...other } = {}) => {
    const { isOpen } = this._getState();

    return {
      'aria-haspopup': true,
      'aria-expanded': isOpen,
      id: id || this._getTriggerId(),
      onClick: composeEventHandlers(onClick, event => {
        if (!isOpen) {
          this._setControlledState({ isOpen: true, focusedIndex: undefined });
        }
      }),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const isDownArrow = event.keyCode === KEY_CODES.DOWN;
        const isUpArrow = event.keyCode === KEY_CODES.UP;
        const isEnter = event.keyCode === KEY_CODES.ENTER;
        const isSpace = event.keyCode === KEY_CODES.SPACE;

        if (isDownArrow || isUpArrow || isEnter || isSpace) {
          event.preventDefault();
          this._setControlledState({ isOpen: true, focusedIndex: 0 });
        }
      }),
      role: role || 'button',
      [refKey]: reference => {
        this.triggerRef = reference;
        ref && ref(reference);
      }
    };
  }

  getMenuProps = ({ style, role, refKey = 'innerRef', ref, onKeyDown, ...other } = {}) => {
    const { isOpen } = this._getState();
    return {
      role: role || 'menu',
      style: isOpen ? style : { display: 'none' },
      'aria-labelledby': this._getTriggerId(),
      [refKey]: reference => {
        this.menuRef = reference;
        ref && ref(reference);
      },
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const isEscapeKey = event.keyCode === KEY_CODES.ESCAPE;

        if (isEscapeKey) {
          event.preventDefault();
          this._setControlledState({ isOpen: false });
        }
      }),
      ...other
    };
  };

  getMenuItemProps = ({ role, ...other } = {}) => {
    return {
      role: role || 'menuitem',
      ...other
    };
  };

  render() {
    const { children, id, onSelect, menu, placement } = this.props;
    const { isOpen, focusedIndex } = this._getState();

    return (
      <Manager>
        <Target>
          {({ targetProps }) => (
            children({
              getTriggerProps: props => this.getTriggerProps({ ...targetProps, ...props }),
              focusedIndex,
              isOpen
            })
          )}
        </Target>
        {isOpen && <Popper placement={placement}>
          {({ popperProps, restProps }) => (
            <SelectionContainer
              vertical
              id={id}
              focusedIndex={focusedIndex}
              defaultFocusIndex={-1}
              onSelect={selectedItem => {
                onSelect && onSelect(selectedItem);
                this._setControlledState({ isOpen: false })
              }}
              onStateChange={({ focusedIndex }) => {
                this._setControlledState({ focusedIndex });
              }}>
              {({ getContainerProps, getItemProps, focusedIndex }) => (
                menu({
                  getMenuProps: props => getContainerProps(this.getMenuProps({ ...popperProps, ...props })),
                  getMenuItemProps: props => getItemProps(this.getMenuItemProps(props)),
                  focusedIndex,
                  isOpen
                })
              )}
            </SelectionContainer>
          )}
        </Popper>
        }
      </Manager>
    );
  }
}
