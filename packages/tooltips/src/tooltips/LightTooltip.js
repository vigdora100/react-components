import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TooltipStyles from '@zendesk/garden-css-tooltips';
import { retrieveTheme } from 'garden-react-theming';
import { zdColorOil } from '@zendesk/garden-css-variables';

import Tooltip from './Tooltip';
import Title from './content/Title';

const LightTooltip = styled(Tooltip).attrs({
  className: props => classNames(TooltipStyles['c-tooltip--light'])
})`
  ${/* sc-selector */ Title} {
    color: ${zdColorOil};
  }

  ${props => retrieveTheme('tooltip.light_tooltip', props)}
`;

LightTooltip.propTypes = {
  arrow: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
  'data-placement': PropTypes.oneOf(['right', 'left', 'top', 'bottom'])
};

LightTooltip.defaultProps = {
  arrow: true,
  size: 'large'
};

/** @component */
export default LightTooltip;
