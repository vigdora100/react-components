import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

import Item from './Item';

const NextItem = styled(Item).attrs({
  className: props => classNames(MenuStyles['c-menu__item--next'])
})`
  ${props => retrieveTheme('menu.item_next', props)}
`;

/** @component */
export default NextItem;
