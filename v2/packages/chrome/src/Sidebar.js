import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const Sidebar = styled.aside.attrs({
  className: ChromeStyles['c-chrome__body__content__sidebar']
})`
  ${props => utils.retrieveTheme('chrome.sidebar', props)}
`;

/** @component */
export default Sidebar;
