import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';

const StyledNavItem = styled.a.attrs({
  className: props => classNames(ChromeStyles['c-chrome__nav__item'], {
    [ChromeStyles['c-chrome__nav__item--logo']]: props.logo,
    [ChromeStyles['is-current']]: props.current,
    [ChromeStyles['is-hovered']]: props.hovered,
    [ChromeStyles['is-active']]: props.active,
    [ChromeStyles['is-focused']]: props.focused,
    [ChromeStyles['c-chrome__nav__item--logo--connect']]: props.product === 'connect',
    [ChromeStyles['c-chrome__nav__item--logo--chat']]: props.product === 'chat',
    [ChromeStyles['c-chrome__nav__item--logo--explore']]: props.product === 'explore',
    [ChromeStyles['c-chrome__nav__item--logo--guide']]: props.product === 'guide',
    [ChromeStyles['c-chrome__nav__item--logo--message']]: props.product === 'message',
    [ChromeStyles['c-chrome__nav__item--logo--support']]: props.product === 'support',
    [ChromeStyles['c-chrome__nav__item--logo--talk']]: props.product === 'talk'
  }),
  tabIndex: props => {
    if (props.tabIndex) {
      return props.tabIndex;
    }

    return props.logo ? -1 : 0;
  }
})`
  cursor: pointer;

  ${props => utils.retrieveTheme('chrome.nav_item', props)}
`;

const NavItem = ({ focused, ...other }) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledNavItem
        {...getFocusProps({
          ...other,
          focused: focused || keyboardFocused
        })} />
    )}
  </KeyboardFocusContainer>
);

NavItem.propTypes = {
  logo: PropTypes.bool,
  current: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  product: PropTypes.oneOf(['connect', 'chat', 'explore', 'guide', 'message', 'support', 'talk']),
  children: PropTypes.node
};

/** @component */
export default NavItem;
