import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const HeaderItemIcon = styled.div.attrs({
  className: ChromeStyles['c-chrome__body__header__item__icon']
})`
  ${props => utils.retrieveTheme('chrome.header_item_icon', props)}
`;

/** @component */
export default HeaderItemIcon;
