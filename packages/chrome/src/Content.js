import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const Content = styled.div.attrs({
  className: ChromeStyles['c-chrome__body__content']
})`
  ${props => retrieveTheme('chrome.content', props)}
`;

/** @component */
export default Content;
