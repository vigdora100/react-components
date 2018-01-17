import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from 'garden-react-theming';

import Well from './Well';

const Alert = styled(Well).attrs({
  className: classNames(CalloutStyles['c-callout--dialog'])
})`
  ${props => retrieveTheme('notifications.alert', props)}
`;

Well.propTypes = {
  recessed: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool
};

/** @component */
export default Alert;

