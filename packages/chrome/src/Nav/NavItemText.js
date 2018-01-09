import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const NavItemText = styled.div.attrs({
  className: ChromeStyles['c-chrome__nav__item__text']
})`
  ${props => retrieveTheme('chrome.nav_item_text', props)}
`;

/** @component */
export default NavItemText;
