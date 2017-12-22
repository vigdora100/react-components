import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

const SubNavItem = styled.a.attrs({
  className: props => classNames(ChromeStyles['c-chrome__subnav__item'], {
    [ChromeStyles['is-current']]: props.current,
    [ChromeStyles['is-hovered']]: props.hovered,
    [ChromeStyles['is-active']]: props.active,
    [ChromeStyles['is-focused']]: props.focused
  })
})``;

SubNavItem.propTypes = {
  current: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool
};

/** @component */
export default SubNavItem;

