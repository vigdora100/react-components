import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { utils } from '@zendeskgarden/react-theming';

const Item = styled.div.attrs({
  className: props => classNames(MenuStyles['c-menu__item'], {
    [MenuStyles['is-selected']]: props.selected,
    [MenuStyles['is-checked']]: props.checked,
    [MenuStyles['is-focused']]: props.focused,
    [MenuStyles['is-disabled']]: props.disabled,
    [MenuStyles['is-disabled']]: props.disabled
  })
})`
  ${props => utils.retrieveTheme('menu.item', props)}
`;

/** @component */
export default Item;
