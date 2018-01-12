
import styled from 'styled-components';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

const HeaderIcon = styled.div.attrs({
  className: MenuStyles['c-menu__item--header__icon']
})`
  svg {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  ${props => retrieveTheme('menu.item_header.icon', props)}
`;

/** @component */
export default HeaderIcon;
