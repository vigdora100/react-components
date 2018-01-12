import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Manager, Popper, Target } from 'react-popper';
import { SelectionContainer, composeEventHandlers, KEY_CODES, idManagement } from 'garden-react-selection';

export default class MenuContainer extends PureComponent {
  static propTypes = {
    /** Callback for all state objects. Used when in 'controlled' mode. */
    onStateChange: PropTypes.func,
    onSelect: PropTypes.func,
    children: PropTypes.func,
    /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
    placement: PropTypes.oneOf(['auto', 'top', 'top-start', 'top-end', 'right', 'right-start',
      'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),
    /* State that can be be optionally provided for controlled usage*/
    /* eslint-disable react/no-unused-prop-types */
    /** The root ID to use for descendants. A unique ID is created if none is provided. */
    focusedIndex: PropTypes.number,
    isOpen: PropTypes.bool,
    id: PropTypes.string
    /* eslint-enable react/no-unused-prop-types */
  };

  static defaultProps = {
    placement: 'bottom-start'
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isOpen: false,
      focusedIndex: undefined,
      id: idManagement.generateId()
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

  _getTriggerId = () => `garden-${this._getState().id}--trigger`;

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
      // style: isOpen ? style : { display: 'none' },
      style,
      'aria-hidden': !isOpen,
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

  getMenuItemProps = ({ refKey = 'innerRef', role, ...other } = {}) => {
    return {
      role: role || 'menuitem',
      ...other
    };
  };

  render() {
    const { children, onSelect, menu, placement } = this.props;
    const { isOpen, focusedIndex, id } = this._getState();

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
        <Popper placement={placement}>
          {({ popperProps, restProps, scheduleUpdate }) => {
            this.popperScheduleUpdate = scheduleUpdate;
            console.log(popperProps);
            return (
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
                    getMenuProps: props => getContainerProps(this.getMenuProps({
                      ...popperProps,
                      ...props,
                      style: Object.assign(popperProps.style, props && props.style)
                    })),
                    getMenuItemProps: props => getItemProps(this.getMenuItemProps(props)),
                    focusedIndex,
                    isOpen
                  })
                )}
              </SelectionContainer>
            );
          }}
        </Popper>
      </Manager>
    );
  }
}
