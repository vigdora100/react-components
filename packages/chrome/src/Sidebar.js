import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';
import ChromeStyles from '@zendesk/garden-css-chrome';

const Sidebar = styled.aside.attrs({
  className: ChromeStyles['c-chrome__body__content__sidebar']
})`
  ${props => retrieveTheme('chrome.sidebar', props)}
`;

/** @component */
export default Sidebar;
