import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const NavItemText = styled.div.attrs({
  className: ChromeStyles['c-chrome__nav__item__text']
})`
  ${props => utils.retrieveTheme('chrome.nav_item_text', props)}
`;

/** @component */
export default NavItemText;
