import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { utils } from '@zendeskgarden/react-theming';

const Paragraph = styled.div.attrs({
  className: classNames(CalloutStyles['c-callout__paragraph'])
})`
  ${props => utils.retrieveTheme('callout.content', props)}
`;
/** @component */
export default Paragraph;

