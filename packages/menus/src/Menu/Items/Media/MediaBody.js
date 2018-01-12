import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

const MediaBody = styled.div.attrs({
  className: MenuStyles['c-menu__item--media__body']
})`
  ${props => retrieveTheme('menu.item_media.body', props)}
`;

/** @component */
export default MediaBody;
