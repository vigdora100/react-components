import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

import Item from '../Item';

const HeaderItem = styled(Item).attrs({
  className: props => classNames(MenuStyles['c-menu__item--header'])
})`
  ${props => retrieveTheme('menu.item_header', props)}
`;

/** @component */
export default HeaderItem;
