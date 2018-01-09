import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from 'garden-react-theming';

import Notification from './Notification';

const DialogNotification = styled(Notification).attrs({
  className: classNames(CalloutStyles['c-callout--dialog'])
})`
  ${props => retrieveTheme('callout.callout_dialog', props)}
`;

/** @component */
export default DialogNotification;

