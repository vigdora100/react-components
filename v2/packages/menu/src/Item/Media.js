import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

import Item from './index';

const Media = styled(Item).attrs({
  className: MenuStyles['c-menu__item--media']
})`
  ${props => utils.retrieveTheme('menu.item_media', props)}
`;

/** @component */
export default Media;
