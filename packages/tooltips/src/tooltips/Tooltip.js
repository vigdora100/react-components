import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TooltipStyles from '@zendesk/garden-css-tooltips';
import ArrowStyles from '@zendesk/garden-css-arrows';
import { zdColorWhite } from '@zendesk/garden-css-variables';
import { retrieveTheme, isRtl } from 'garden-react-theming';

import Title from './content/Title';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const shouldShowArrow = props => {
  const placement = props['data-placement'];

  return props.arrow && placement === 'left' || placement === 'bottom' ||
    placement === 'right' || placement === 'top';
};

const retrieveTooltipMargin = props => {
  const placement = props['data-placement'];

  if (placement === 'bottom') {
    return 'margin-top: 8px;'
  }

  if (placement === 'top') {
    return 'margin-bottom: 8px;'
  }

  if (placement === 'left') {
    return 'margin-right: 8px;'
  }

  if (placement === 'right') {
    return 'margin-left: 8px;'
  }
}

const Tooltip = styled.div.attrs({
  className: props => classNames(TooltipStyles['c-tooltip'], {
    // Size
    [TooltipStyles['c-tooltip--medium']]: props.size === 'medium',
    [TooltipStyles['c-tooltip--large']]: props.size === 'large',
    [TooltipStyles['c-tooltip--extra-large']]: props.size === 'extra-large',

    // Arrows
    [ArrowStyles['c-arrow']]: shouldShowArrow(props),
    [ArrowStyles['c-arrow--l']]: props['data-placement'] === 'right',
    [ArrowStyles['c-arrow--r']]: props['data-placement'] === 'left',
    [ArrowStyles['c-arrow--b']]: props['data-placement'] === 'top',
    [ArrowStyles['c-arrow--t']]: props['data-placement'] === 'bottom',
  })
})`
  animation: ${fadeIn} 100ms linear;
  direction: ${props => isRtl(props) ? 'rtl' : 'ltr'};
  ${props => retrieveTooltipMargin(props)}

  ${/* sc-selector */ Title} & {
    color: ${zdColorWhite};
  }

  ${props => retrieveTheme('tooltip.tooltip', props)}
`;

Tooltip.propTypes = {
  arrow: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
  'data-placement': PropTypes.oneOf(['right', 'left', 'top', 'bottom'])
};

Tooltip.defaultProps = {
  arrow: true,
  size: 'small'
};

/** @component */
export default Tooltip;
