import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

import Item from './Item';

const PreviousItem = styled(Item).attrs({
  className: props => classNames(MenuStyles['c-menu__item--previous'])
})`
  ${props => retrieveTheme('menu.item_previous', props)}
`;

/** @component */
export default PreviousItem;
