import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from 'garden-react-theming';

const Icon = styled.img.attrs({
  className: props => classNames(ButtonStyles['c-btn__icon'], {
    [ButtonStyles['is-rotated']]: props.rotated
  })
})`
  ${props => retrieveTheme('button.icon', props)}
`;

Icon.propTypes = {
  /**
   * Whether the icon is currently rotated
   */
  rotated: PropTypes.bool
}

/** @component */
export default Icon;
