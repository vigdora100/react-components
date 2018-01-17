import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts/dist/index.css';
import { retrieveTheme } from 'garden-react-theming';

const Close = styled.button.attrs({
  className: props => classNames(CalloutStyles['c-callout__close'], {
    [CalloutStyles['is-focused']]: props.focused,
    [CalloutStyles['is-hovered']]: props.hovered
  })
})`
  ${props => retrieveTheme('notifications.close', props)}
`;

Close.propTypes = {
  focused: PropTypes.bool,
  hovered: PropTypes.bool
};

/** @component */
export default Close;

