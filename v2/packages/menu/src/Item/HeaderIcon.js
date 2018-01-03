import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

const HeaderIcon = styled.div.attrs({
    className: MenuStyles['c-menu__item--header__icon']
})`
    ${props => utils.retrieveTheme('menu.item_header_icon', props)}
`;

/** @component */
export default HeaderIcon;
