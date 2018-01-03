import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

const Separator = styled.div.attrs({
    className: MenuStyles['c-menu__separator']
})`
    ${props => utils.retrieveTheme('menu.separator', props)}
`;

/** @component */
export default Separator;
