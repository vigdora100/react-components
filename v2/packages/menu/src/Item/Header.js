import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

import Item from './index';

const Header = styled(Item).attrs({
  className: MenuStyles['c-menu__item--header']
})`
  ${props => utils.retrieveTheme('menu.item_header', props)}
`;

/** @component */
export default Header;
