import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

const Meta = styled.div.attrs({
    className: MenuStyles['c-menu__item__meta']
})`
    ${props => utils.retrieveTheme('menu.item_meta', props)}
`;

/** @component */
export default Meta;
