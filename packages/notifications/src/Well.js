import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts/dist/index.css';
import { retrieveTheme, isRtl } from 'garden-react-theming';

const Well = styled.div.attrs({
  className: props => classNames(CalloutStyles['c-callout'], {
    // RTL
    [CalloutStyles['is-rtl']]: isRtl(props),

    // Styles
    [CalloutStyles['c-callout--recessed']]: props.recessed,

    // Validation types
    [CalloutStyles['c-callout--success']]: props.success,
    [CalloutStyles['c-callout--warning']]: props.warning,
    [CalloutStyles['c-callout--error']]: props.error,
  })
})`
  ${props => retrieveTheme('notifications.well', props)}
`;

Well.propTypes = {
  recessed: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool
};

/** @component */
export default Well;
