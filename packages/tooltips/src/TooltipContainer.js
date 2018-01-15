import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Manager, Popper, Target } from 'react-popper';
import { ControlledComponent, composeEventHandlers, idManagement } from 'garden-react-selection';

/**
 * This container must provide a wrapper for the provided tooltip
 * due to constraints in our arrow css. We must ensure that the container
 * of the tooltip can retain it's relative positioning. Without this
 * container Popper would apply absolute positioning.
 */
const TooltipWrapper = styled.div`
  &[aria-hidden="true"] {
    display: none;
  }
`;
TooltipWrapper.displayName = 'TooltipWrapper';

export default class TooltipContainer extends ControlledComponent {
  static propTypes = {
    /** Controls visibility of tooltip */
    isVisible: PropTypes.bool,
    /** Returns all changed state. Used for controlling state. */
    onStateChange: PropTypes.func,
    /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
    placement: PropTypes.oneOf(['auto', 'top', 'right', 'right-start',
      'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),
    eventsEnabled: PropTypes.bool,
    /** Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options) */
    popperModifiers: PropTypes.object,
    /** Milliseconds of delay before open/close of tooltip is initiated */
    delayMilliseconds: PropTypes.number
  };

  static defaultProps = {
    placement: 'top',
    eventsEnabled: true,
    delayMilliseconds: 500
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isVisible: false,
      id: idManagement.generateId()
    };
  }

  componentWillUnmount() {
    clearTimeout(this.openTooltipTimeout);
    clearTimeout(this.closeTooltipTimeout);
  }

  _openMenu = (delayMilliseconds = this.props.delayMilliseconds) => {
    clearTimeout(this.closeTooltipTimeout);

    this.openTooltipTimeout = setTimeout(() => {
      this.setControlledState({ isVisible: true });
    }, delayMilliseconds);
  }

  _closeMenu = (delayMilliseconds = this.props.delayMilliseconds) => {
    clearTimeout(this.openTooltipTimeout);

    this.closeTooltipTimeout = setTimeout(() => {
      this.setControlledState({ isVisible: false });
    }, delayMilliseconds);
  }

  _getTooltipId = () => `${this.getControlledState().id}--tooltip`;

  _getTriggerProps = ({ tabIndex, refKey = 'innerRef', ref, onMouseEnter, onMouseLeave, onFocus, onBlur, ...other } = {}) => {
    const { isVisible } = this.getControlledState();

    return {
      tabIndex: tabIndex || 0,
      'aria-describedby': isVisible ? this._getTooltipId() : undefined,
      onMouseEnter: composeEventHandlers(onMouseEnter, event => {
        this._openMenu();
      }),
      onMouseLeave: composeEventHandlers(onMouseLeave, event => {
        this._closeMenu();
      }),
      onFocus: composeEventHandlers(onFocus, event => {
        this._openMenu()
      }),
      onBlur: composeEventHandlers(onBlur, event => {
        // Close menu immediately when blurred
        this._closeMenu(0);
      }),
      [refKey]: reference => {
        // Necessary for popper.js positioning
        ref && ref(reference);
      },
      ...other
    };
  }

  _getTooltipProps = ({ id, style, role, onMouseEnter, onMouseLeave, ...other } = {}) => {
    return {
      style,
      id: id || this._getTooltipId(),
      role: role || 'tooltip',
      onMouseEnter: composeEventHandlers(onMouseEnter, event => {
        this._openMenu();
      }),
      onMouseLeave: composeEventHandlers(onMouseLeave, event => {
        this._closeMenu();
      }),
      ...other
    };
  }

  render() {
    const { children, tooltip, placement, eventsEnabled, popperModifiers } = this.props;
    const { isVisible } = this.getControlledState();

    return (
      <Manager>
        <Target>
          {({ targetProps }) => (
            children && children({
              getTriggerProps: props => this._getTriggerProps({ ...targetProps, ...props }),
              isVisible
            })
          )}
        </Target>
        <Popper
          placement={placement}
          eventsEnabled={eventsEnabled}
          modifiers={popperModifiers}>
          {({ popperProps, restProps, scheduleUpdate }) => {
            const placement = popperProps['data-placement'];
            const outOfBoundaries = popperProps['data-x-out-of-boundaries'];

            return (
              <TooltipWrapper
                innerRef={popperProps.ref}
                style={popperProps.style}
                aria-hidden={!isVisible}>
                {tooltip && tooltip({
                  getTooltipProps: props => this._getTooltipProps({
                    'data-placement': placement,
                    'data-x-out-of-boundaries': outOfBoundaries,
                    ...props
                  }),
                  isVisible,
                  placement,
                  outOfBoundaries,
                  scheduleUpdate
                })}
              </TooltipWrapper>
            );
          }}
        </Popper>
      </Manager>
    );
  }
}
