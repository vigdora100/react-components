import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

import Item from './Item';

const Add = styled(Item).attrs({
  className: props => classNames(MenuStyles['c-menu__item--add'])
})`
  ${props => retrieveTheme('menu.item_add', props)}
`;

/** @component */
export default Add;
