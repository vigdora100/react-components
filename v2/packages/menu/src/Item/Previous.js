import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

import Item from './index';

const Previous = styled(Item).attrs({
    className: MenuStyles['c-menu__item--previous']
})`
    ${props => utils.retrieveTheme('menu.item_previous', props)}
`;

/** @component */
export default Previous;
