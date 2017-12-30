import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';

const Nav = styled.nav.attrs({
  className: props => classNames(ChromeStyles['c-chrome__nav'], {
    [ChromeStyles['c-chrome__nav--expanded']]: props.expanded,
    [ChromeStyles['c-chrome__nav--dark']]: props.dark,
    [ChromeStyles['c-chrome__nav--light']]: props.light
  })
})``;

Nav.propTypes = {
    expanded: PropTypes.bool,
    dark: PropTypes.bool,
    light: PropTypes.bool
};

/** @component */
export default Nav;
