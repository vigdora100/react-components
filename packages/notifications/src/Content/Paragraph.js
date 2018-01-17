import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts/dist/index.css';
import { retrieveTheme } from 'garden-react-theming';

const Paragraph = styled.div.attrs({
  className: classNames(CalloutStyles['c-callout__paragraph'])
})`
  ${props => retrieveTheme('notifications.paragraph', props)}
`;
/** @component */
export default Paragraph;

