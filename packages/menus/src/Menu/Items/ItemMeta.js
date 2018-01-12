
import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

const ItemMeta = styled.div.attrs({
  className: MenuStyles['c-menu__item__meta']
})`
  ${props => retrieveTheme('menu.item_meta', props)}
`;

/** @component */
export default ItemMeta;
