import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const Main = styled.main.attrs({
  className: ChromeStyles['c-chrome__body__content__main']
})`
  ${props => utils.retrieveTheme('chrome.main', props)}
`;

/** @component */
export default Main;
