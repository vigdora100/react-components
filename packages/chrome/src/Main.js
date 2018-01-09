import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const Main = styled.main.attrs({
  className: ChromeStyles['c-chrome__body__content__main']
})`
  ${props => retrieveTheme('chrome.main', props)}
`;

/** @component */
export default Main;
