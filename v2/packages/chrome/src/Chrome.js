import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';

const Chrome = styled.div.attrs({
  className: props => classNames(ChromeStyles['c-chrome'], {
    [ChromeStyles['is-rtl']]: props.theme.rtl
  })
})``;

/** @component */
export default Chrome;
