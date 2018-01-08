import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { utils } from '@zendeskgarden/react-theming';

const Title = styled.div.attrs({
  className: classNames(CalloutStyles['c-callout__title'])
})`
  ${props => utils.retrieveTheme('callout.title', props)}
`;

/** @component */
export default Title;

