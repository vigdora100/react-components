import React from 'react';
import PropTypes from 'prop-types';
import { Manager, Popper, Target } from 'react-popper';
import { SelectionContainer, composeEventHandlers, KEY_CODES, idManagement, ControlledComponent } from 'garden-react-selection';

export default class MenuContainer extends ControlledComponent {
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
    const { isOpen } = this.getControlledState();
    const previousIsOpen = this.isControlledProp('isOpen') ? prevProps.isOpen : prevState.isOpen;

    if (isOpen && !previousIsOpen) {
      this.menuRef && this.menuRef.focus();
    }

    if (!isOpen && previousIsOpen) {
      this.triggerRef && this.triggerRef.focus();
    }
  }

  _handleClickOutside = (event) => {
    const { isOpen } = this.getControlledState();

    if (isOpen && this.menuRef && !this.menuRef.contains(event.target)) {
      this.setControlledState({ isOpen: false });
    }
  }

  _getTriggerId = () => `${this.getControlledState().id}--trigger`;

  _getTriggerProps = ({ id, refKey = 'innerRef', ref, role, onKeyDown, onClick, ...other } = {}) => {
    const { isOpen } = this.getControlledState();

    return {
      'aria-haspopup': true,
      'aria-expanded': isOpen,
      id: id || this._getTriggerId(),
      onClick: composeEventHandlers(onClick, event => {
        if (!isOpen) {
          this.setControlledState({ isOpen: true, focusedIndex: undefined });
        }
      }),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const isDownArrow = event.keyCode === KEY_CODES.DOWN;
        const isUpArrow = event.keyCode === KEY_CODES.UP;
        const isEnter = event.keyCode === KEY_CODES.ENTER;
        const isSpace = event.keyCode === KEY_CODES.SPACE;

        if (isDownArrow || isUpArrow || isEnter || isSpace) {
          event.preventDefault();
          this.setControlledState({ isOpen: true, focusedIndex: 0 });
        }
      }),
      role: role || 'button',
      [refKey]: reference => {
        this.triggerRef = reference;
        ref && ref(reference);
      }
    };
  }

  _getMenuProps = ({ style, role, refKey = 'innerRef', ref, onKeyDown, onBlur, ...other } = {}) => {
    const { isOpen } = this.getControlledState();

    return {
      role: role || 'menu',
      style,
      'aria-hidden': !isOpen,
      'aria-labelledby': this._getTriggerId(),
      [refKey]: reference => {
        this.menuRef = reference;
        // Necessary for popper.js positioning
        ref && ref(reference);
      },
      onBlur: composeEventHandlers(onBlur, event => {
        const currentTarget = event.currentTarget;

        setTimeout(() => {
          if (!currentTarget.contains(document.activeElement)) {
            this.setControlledState({ isOpen: false });
          }
        }, 0);
      }),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const isEscapeKey = event.keyCode === KEY_CODES.ESCAPE;

        if (isEscapeKey) {
          event.preventDefault();
          this.setControlledState({ isOpen: false });
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
    const { isOpen, focusedIndex, id } = this.getControlledState();

    return (
      <Manager>
        <Target>
          {({ targetProps }) => (
            children({
              getTriggerProps: props => this._getTriggerProps({ ...targetProps, ...props }),
              focusedIndex,
              isOpen
            })
          )}
        </Target>
        <Popper placement={placement}>
          {({ popperProps, restProps, scheduleUpdate }) => (
            <SelectionContainer
              vertical
              id={id}
              focusedIndex={focusedIndex}
              defaultFocusedIndex={-1}
              onStateChange={({ selectedItem, focusedIndex }) => {
                const wasItemSelected = typeof selectedItem !== 'undefined';
                const newMenuState = { focusedIndex };

                if (wasItemSelected) {
                  onSelect && onSelect(selectedItem);
                  newMenuState.isOpen = false;
                }

                this.setControlledState(newMenuState);
              }}>
              {({ getContainerProps, getItemProps, focusedIndex }) => (
                menu({
                  getMenuProps: props => getContainerProps(this._getMenuProps({
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
          )}
        </Popper>
      </Manager>
    );
  }
}
