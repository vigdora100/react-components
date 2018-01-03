import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Manager, Target, Popper } from 'react-popper';

import { SelectionContainer, utils, KEY_CODES } from '@zendeskgarden/react-selection';

export default class MenuContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
    content: PropTypes.func,
    /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
    placement: PropTypes.oneOf(['auto', 'top', 'top-start', 'top-end', 'right', 'right-start',
      'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),
    selectedIndex: PropTypes.number,
    onSelection: PropTypes.func
  };

  static defaultProps = {
    placement: 'bottom'
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isOpen: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;

    if (isOpen) {
      this.contentRef.focus();
    }
  }

  getTriggerProps = ({ ref, onClick, onFocus, onKeyDown, ...other } = {}) => {
    return {
      innerRef: reference => {
        this.triggerRef = reference;
        ref && ref(reference);
      },
      onClick: utils.composeEventHandlers(onClick, event => {
        this.setState({ isOpen: !this.state.isOpen });
      }),
      onKeyDown: utils.composeEventHandlers(onKeyDown, event => {
        if (event.keyCode === KEY_CODES.ENTER || event.keyCode === KEY_CODES.SPACE) {
          this.setState({ isOpen: true });
          event.preventDefault();
        }
      }),
      tabIndex: 0,
      ...other
    };
  };

    getMenuProps = ({ ref, innerRef, onBlur, onKeyDown, ...other } = {}) => {
      return {
        innerRef: reference => {
          this.contentRef = reference;
          ref && ref(reference);
          innerRef && innerRef(reference);
        },
        onBlur: utils.composeEventHandlers(onBlur, () => {
          this.setState({ isOpen: !this.state.isOpen });
        }),
        onKeyDown: utils.composeEventHandlers(onKeyDown, event => {
          if (event.keyCode === KEY_CODES.ESCAPE) {
            this.setState({ isOpen: false }, () => {
              this.triggerRef.focus();
            });
          }
        }),
        ...other
      };
    }

    render() {
      const { children, placement, content, onSelection } = this.props;
      const { isOpen, selectedIndex } = this.state;

      return (
        <Manager>
          <Target>
            {({ targetProps }) => (
              children({
                getTriggerProps: (props) => this.getTriggerProps({ ...props, ...targetProps })
              })
            )}
          </Target>
          {isOpen && <Popper placement={placement}>
            {({ popperProps, restProps }) => (
              <SelectionContainer
                vertical
                selectedIndex={typeof this.props.selectedIndex !== 'undefined' ? this.props.selectedIndex : selectedIndex}
                onSelection={(newSelectedIndex, selectedItem) => {
                  if (onSelection) {
                    const shouldStayOpen = onSelection(newSelectedIndex, selectedItem);

                    this.setState({ isOpen: shouldStayOpen }, () => {
                      if (!shouldStayOpen) {
                        this.triggerRef.focus();
                      }
                    });
                  } else {
                    this.setState({ selectedIndex: newSelectedIndex, isOpen: false }, () => {
                      this.triggerRef.focus();
                    });
                  }
                }}>
                {({ getContainerProps, getItemProps, selectedIndex, highlightedIndex }) => (
                  content({
                    getMenuProps: (props) => getContainerProps(this.getMenuProps({ ...props, ...popperProps })),
                    getMenuItemProps: getItemProps,
                    selectedIndex,
                    highlightedIndex
                  })
                )}
              </SelectionContainer>
            )}
          </Popper>}
        </Manager>
      );
    }
};
