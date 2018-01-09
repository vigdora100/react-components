import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const Body = styled.div.attrs({
  className: ChromeStyles['c-chrome__body']
})`
  ${props => retrieveTheme('chrome.body', props)}
`;

/** @component */
export default Body;
