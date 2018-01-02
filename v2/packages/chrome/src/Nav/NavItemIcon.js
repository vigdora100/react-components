import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const NavItemIcon = styled.div.attrs({
  className: ChromeStyles['c-chrome__nav__item__icon']
})`
  ${props => utils.retrieveTheme('chrome.nav_item_icon', props)}
`;

/** @component */
export default NavItemIcon;
