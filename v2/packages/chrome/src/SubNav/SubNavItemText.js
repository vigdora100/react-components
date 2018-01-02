import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const SubNavItemText = styled.span.attrs({
  className: ChromeStyles['c-chrome__subnav__item__text']
})`
  ${props => utils.retrieveTheme('chrome.sub_nav_item_text', props)}
`;

/** @component */
export default SubNavItemText;
