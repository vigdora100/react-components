import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const Header = styled.div.attrs({
  className: ChromeStyles['c-chrome__body__header']
})`
  ${props => utils.retrieveTheme('chrome.header', props)}
`;

/** @component */
export default Header;
