import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

import Item from './index';

const Add = styled(Item).attrs({
  className: MenuStyles['c-menu__item--add']
})`
  ${props => utils.retrieveTheme('menu.item_add', props)}
`;

/** @component */
export default Add;
