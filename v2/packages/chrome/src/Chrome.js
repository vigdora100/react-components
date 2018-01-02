import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { utils } from '@zendeskgarden/react-theming';

const Chrome = styled.div.attrs({
  className: props => classNames(ChromeStyles['c-chrome'], {
    [ChromeStyles['is-rtl']]: utils.isRtl(props)
  })
})`
  ${props => utils.retrieveTheme('chrome', props)}
`;

/** @component */
export default Chrome;
