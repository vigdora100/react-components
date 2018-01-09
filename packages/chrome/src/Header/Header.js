import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const Header = styled.div.attrs({
  className: ChromeStyles['c-chrome__body__header']
})`
  ${props => retrieveTheme('chrome.header', props)}
`;

/** @component */
export default Header;
