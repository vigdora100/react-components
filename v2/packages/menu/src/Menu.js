import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import ArrowStyles from '@zendesk/garden-css-arrows';
import { utils } from '@zendeskgarden/react-theming';

const Menu = styled.div.attrs({
  className: props => classNames(MenuStyles['c-menu'], {
    [MenuStyles['is-rtl']]: utils.isRtl(props),
    [ArrowStyles['c-arrow']]: props.arrow,
    [ArrowStyles['c-arrow--l']]: props['data-placement'] === 'right',
    [ArrowStyles['c-arrow--r']]: props['data-placement'] === 'left',
    [ArrowStyles['c-arrow--b']]: props['data-placement'] === 'top',
    [ArrowStyles['c-arrow--t']]: props['data-placement'] === 'bottom'
  }),
  tabIndex: -1
})`
  margin: 4px !important;

  :focus {
    outline: none;
  }

  ${props => utils.retrieveTheme('menu', props)}
`;

/** @component */
export default Menu;
