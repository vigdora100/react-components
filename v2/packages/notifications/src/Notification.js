import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';

import { utils } from '@zendeskgarden/react-theming';

const Notification = styled.div.attrs({
  className: props => classNames(CalloutStyles['c-callout'], {
    [CalloutStyles['is-rtl']]: utils.isRtl(props),
    [CalloutStyles['c-callout--recessed']]: props.recessed,
    [CalloutStyles['c-callout--success']]: props.success,
    [CalloutStyles['c-callout--warning']]: props.warning,
    [CalloutStyles['c-callout--error']]: props.error,
  })
})`
  ${props => utils.retrieveTheme('callout.callout', props)}
`;

Notification.propTypes = {
  recessed: PropTypes.bool
};

/** @component */
export default Notification;
