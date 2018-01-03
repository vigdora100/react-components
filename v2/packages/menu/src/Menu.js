import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

const Menu = styled.div.attrs({
  className: props => classNames(MenuStyles['c-menu'], {
    [MenuStyles['is-rtl']]: utils.isRtl(props)
  }),
  tabIndex: -1
})`
  margin: 4px !important;

  :focus {
    outline: none;
  }

  ${props => utils.retrieveTheme('menu', props)}
`;

/** @component */
export default Menu;
