
import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

const MediaFigure = styled.div.attrs({
  className: MenuStyles['c-menu__item--media__figure']
})`
  svg {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  ${props => retrieveTheme('menu.item_media.figure', props)}
`;

/** @component */
export default MediaFigure;
