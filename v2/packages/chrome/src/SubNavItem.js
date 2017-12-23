import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import KeyboardFocusContainer from './KeyboardFocusContainer';

const StyledSubNavItem = styled.a.attrs({
  className: props => classNames(ChromeStyles['c-chrome__subnav__item'], {
    [ChromeStyles['is-current']]: props.current,
    [ChromeStyles['is-hovered']]: props.hovered,
    [ChromeStyles['is-active']]: props.active,
    [ChromeStyles['is-focused']]: props.focused
  }),
  tabIndex: props => props.tabIndex || 0
})``;

const SubNavItem = ({ onFocus, onBlur, onMouseDown, children, focused, ...other}) => (
  <KeyboardFocusContainer>
    {keyboardFocusProps => (
        <StyledSubNavItem
          {...other}
          onFocus={event => {
            keyboardFocusProps.onFocus(event);
            onFocus && onFocus(event);
          }}
          onBlur={event => {
            keyboardFocusProps.onBlur(event);
            onBlur && onBlur(event);
          }}
          onMouseDown={event => {
            keyboardFocusProps.onMouseDown(event);
            onMouseDown && onMouseDown(event);
          }}
          focused={focused || keyboardFocusProps.isKeyboardFocused}>
          {children}
        </StyledSubNavItem>
    )}
  </KeyboardFocusContainer>
);

SubNavItem.propTypes = {
  current: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool
};

/** @component */
export default SubNavItem;
