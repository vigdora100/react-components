import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const NavItemIcon = styled.div.attrs({
  className: ChromeStyles['c-chrome__nav__item__icon']
})`
  ${props => retrieveTheme('chrome.nav_item_icon', props)}
`;

/** @component */
export default NavItemIcon;
