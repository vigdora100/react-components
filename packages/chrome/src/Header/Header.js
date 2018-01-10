import styled from 'styled-components';
import PropTypes from 'prop-types';
import className from 'classnames';
import ChromeStyles from '@zendesk/garden-css-chrome';
import { retrieveTheme } from 'garden-react-theming';

const Header = styled.div.attrs({
  className: props => className(ChromeStyles['c-chrome__body__header'], {
    [ChromeStyles['c-chrome__body__header--standalone']]: props.standalone
  })
})`
  ${props => retrieveTheme('chrome.header', props)}
`;

Header.propTypes = {
  standalone: PropTypes.bool
};

/** @component */
export default Header;
