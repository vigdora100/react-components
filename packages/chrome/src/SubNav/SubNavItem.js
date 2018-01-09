import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { retrieveTheme } from 'garden-react-theming';
import { KeyboardFocusContainer } from 'garden-react-selection';

const StyledSubNavItem = styled.a.attrs({
  className: props => classNames(ChromeStyles['c-chrome__subnav__item'], {
    [ChromeStyles['is-current']]: props.current,
    [ChromeStyles['is-hovered']]: props.hovered,
    [ChromeStyles['is-active']]: props.active,
    [ChromeStyles['is-focused']]: props.focused
  }),
  tabIndex: props => props.tabIndex || 0
})`
  ${props => retrieveTheme('chrome.sub_nav_item', props)}
`;

const SubNavItem = ({ focused, ...other }) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledSubNavItem
        {...getFocusProps({
          ...other,
          focused: focused || keyboardFocused
        })} />
    )}
  </KeyboardFocusContainer>
);

SubNavItem.propTypes = {
  current: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  children: PropTypes.node
};

/** @component */
export default SubNavItem;
