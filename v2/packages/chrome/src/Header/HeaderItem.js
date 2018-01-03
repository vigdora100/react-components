import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';

const StyledHeaderItem = styled.button.attrs({
  className: props => classNames(ChromeStyles['c-chrome__body__header__item'], {
    [ChromeStyles['c-chrome__body__header__item--logo']]: props.logo,
    [ChromeStyles['c-chrome__body__header__item--max-x']]: props.maxX,
    [ChromeStyles['c-chrome__body__header__item--max-y']]: props.maxY,
    [ChromeStyles['c-chrome__body__header__item--round']]: props.round,
    [ChromeStyles['is-hovered']]: props.hovered,
    [ChromeStyles['is-active']]: props.active,
    [ChromeStyles['is-focused']]: props.focused
  }),
  tabIndex: props => props.tabIndex || 0
})`
  ${props => utils.retrieveTheme('chrome.header_item', props)}
`;

const HeaderItem = ({ focused, children, ...other}) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledHeaderItem
        {...getFocusProps(other)}
        focused={focused || keyboardFocused}>
        {children}
      </StyledHeaderItem>
    )}
  </KeyboardFocusContainer>
);

HeaderItem.propTypes = {
  /** Style the product logo shown as the first item in the header */
  logo: PropTypes.bool,
  /**
   * Horizontally maximize a flex item in the header to take as much space as possible
   * (i.e. breadcrumb container or an empty element separating starting items from ending items)
   */
  maxX: PropTypes.bool,
  /** Vertically maximize the height for a header item (i.e. contains a search input) */
  maxY: PropTypes.bool,
  /** Round the border radius for a header item */
  round: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  children: PropTypes.node
};

/** @component */
export default HeaderItem;
