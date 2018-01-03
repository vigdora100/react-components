import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

import Item from './index';

const Next = styled(Item).attrs({
  className: MenuStyles['c-menu__item--next']
})`
  ${props => utils.retrieveTheme('menu.item_next', props)}
`;

/** @component */
export default Next;
