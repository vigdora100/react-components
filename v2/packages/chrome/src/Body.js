import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const Body = styled.div.attrs({
  className: ChromeStyles['c-chrome__body']
})`
  ${props => utils.retrieveTheme('chrome.body', props)}
`;

/** @component */
export default Body;
