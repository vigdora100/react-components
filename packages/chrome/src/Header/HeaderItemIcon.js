import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme }  from 'garden-react-theming';

const HeaderItemIcon = styled.div.attrs({
  className: ChromeStyles['c-chrome__body__header__item__icon']
})`
  ${props => retrieveTheme('chrome.header_item_icon', props)}
`;

/** @component */
export default HeaderItemIcon;
