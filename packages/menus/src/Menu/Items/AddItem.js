import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

import Item from './Item';

const AddItem = styled(Item).attrs({
  className: props => classNames(MenuStyles['c-menu__item--add'])
})`
  ${props => retrieveTheme('menu.item_add', props)}
`;

/** @component */
export default AddItem;
