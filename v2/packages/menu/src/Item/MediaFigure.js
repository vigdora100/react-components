import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

const MediaFigure = styled.div.attrs({
    className: MenuStyles['c-menu__item--media__figure']
})`
    ${props => utils.retrieveTheme('menu.item_media_figure', props)}
`;

/** @component */
export default MediaFigure;
