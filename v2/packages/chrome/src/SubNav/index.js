import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const SubNav = styled.nav.attrs({
  className: ChromeStyles['c-chrome__subnav']
})`
  ${props => utils.retrieveTheme('chrome.sub_nav', props)}
`;

/** @component */
export default SubNav;
