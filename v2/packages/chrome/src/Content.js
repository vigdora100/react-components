import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const Content = styled.div.attrs({
  className: ChromeStyles['c-chrome__body__content']
})`
  ${props => utils.retrieveTheme('chrome.content', props)}
`;

/** @component */
export default Content;
