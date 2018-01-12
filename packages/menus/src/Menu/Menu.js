import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import ArrowStyles from '@zendesk/garden-css-arrows';
import { retrieveTheme, isRtl } from 'garden-react-theming';

const isBottom = props => props['data-placement'] && props['data-placement'].indexOf('bottom') !== -1;
const isTop = props => props['data-placement'] && props['data-placement'].indexOf('top') !== -1;
const isRight = props => props['data-placement'] && props['data-placement'].indexOf('right') !== -1;
const isLeft = props => props['data-placement'] && props['data-placement'].indexOf('left') !== -1;
const shouldShowArrow = props => {
  const placement = props['data-placement'];

  if (placement === 'left-start' || placement === 'left-end' ||
    placement === 'right-start' || placement === 'right-end') {
    return false;
  }

  return true;
}

const retrieveMenuMargin = props => {
  if (isBottom(props)) {
    return 'margin-top: 4px;'
  }

  if (isTop(props)) {
    return 'margin-bottom: 4px;'
  }

  if (isLeft(props)) {
    return 'margin-right: 4px;'
  }

  return 'margin-left: 4px;'
}

const Menu = styled.div.attrs({
  className: props => classNames(MenuStyles['c-menu'], {
    [MenuStyles['is-rtl']]: isRtl(props),
    // [MenuStyles['is-open']]: !props['aria-hidden'],
    [MenuStyles['c-menu--sm']]: props.small,
    [ArrowStyles['c-arrow']]: props.arrow && shouldShowArrow(props),
    [ArrowStyles['c-arrow--t']]: isBottom(props),
    [ArrowStyles['c-arrow--l']]: props['data-placement'] === 'right',
    [ArrowStyles['c-arrow--r']]: props['data-placement'] === 'left',
    [ArrowStyles['c-arrow--bl']]: props['data-placement'] === 'top-start',
    [ArrowStyles['c-arrow--b']]: props['data-placement'] === 'top',
    [ArrowStyles['c-arrow--br']]: props['data-placement'] === 'top-end',
    [ArrowStyles['c-arrow--l']]: props['data-placement'] === 'right',
    [ArrowStyles['c-arrow--r']]: props['data-placement'] === 'left',
    [ArrowStyles['c-arrow--tl']]: props['data-placement'] === 'bottom-start',
    [ArrowStyles['c-arrow--t']]: props['data-placement'] === 'bottom',
    [ArrowStyles['c-arrow--tr']]: props['data-placement'] === 'bottom-end',
    [MenuStyles['c-menu--down']]: isBottom(props),
    [MenuStyles['c-menu--up']]: isTop(props),
    [MenuStyles['c-menu--left']]: isLeft(props),
    [MenuStyles['c-menu--right']]: isRight(props)
  })
})`
  :focus {
    outline: none;
  }

  && {
    position: inherit;
    ${props => retrieveMenuMargin(props)}
  }

  ${props => retrieveTheme('menu.menu', props)}
`;

Menu.propTypes = {
  arrow: PropTypes.bool,
  small: PropTypes.bool,
  'data-placement': PropTypes.string
};

Menu.defaultProps = {
  arrow: false
};

/** @component */
export default Menu;
