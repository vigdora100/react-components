import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';

const HeaderItem = styled.button.attrs({
  className: props => classNames(ChromeStyles['c-chrome__body__header__item'], {
    [ChromeStyles['c-chrome__body__header__item--logo']]: props.logo,
    [ChromeStyles['c-chrome__body__header__item--max-x']]: props.maxX,
    [ChromeStyles['c-chrome__body__header__item--max-y']]: props.maxY,
    [ChromeStyles['c-chrome__body__header__item--round']]: props.round,
    [ChromeStyles['is-hovered']]: props.hovered,
    [ChromeStyles['is-active']]: props.active,
    [ChromeStyles['is-focused']]: props.focused
  }),
  tabIndex: props => props.tabIndex || 0
})``;

HeaderItem.propTypes = {
  logo: PropTypes.bool,
  maxX: PropTypes.bool,
  maxY: PropTypes.bool,
  round: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool
};

/** @component */
export default HeaderItem;
