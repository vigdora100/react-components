import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const SubNav = styled.nav.attrs({
  className: ChromeStyles['c-chrome__subnav']
})`
  ${props => retrieveTheme('chrome.sub_nav', props)}
`;

/** @component */
export default SubNav;
