import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

import Item from '../Item';

const MediaItem = styled(Item).attrs({
  className: props => classNames(MenuStyles['c-menu__item c-menu__item--media'])
})`
  ${props => retrieveTheme('menu.item_media', props)}
`;

/** @component */
export default MediaItem;
