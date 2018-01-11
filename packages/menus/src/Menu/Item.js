import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

const Item = styled.div.attrs({
  className: props => classNames(MenuStyles['c-menu__item'], {
    [MenuStyles['is-selected']]: props.selected,
    [MenuStyles['is-checked']]: props.checked,
    [MenuStyles['is-focused']]: props.focused,
    [MenuStyles['is-disabled']]: props.disabled,
  })
})`
  ${props => retrieveTheme('menu.item', props)}
`;

/** @component */
export default Item;
