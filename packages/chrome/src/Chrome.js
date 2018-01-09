import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme, isRtl } from 'garden-react-theming';

const Chrome = styled.div.attrs({
  className: props => classNames(ChromeStyles['c-chrome'], {
    [ChromeStyles['is-rtl']]: isRtl(props)
  })
})`
  ${props => retrieveTheme('chrome', props)}
`;

/** @component */
export default Chrome;
