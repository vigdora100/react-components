import styled from 'styled-components';
import classNames from 'classnames';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { utils } from '@zendeskgarden/react-theming';

const ButtonGroup = styled.div.attrs({
  className: props => classNames(ButtonStyles['l-btn-group'], {
    [ButtonStyles['is-rtl']]: utils.isRtl(props)
  })
})`
  :focus {
    outline: none;
  }

  ${props => utils.retrieveTheme('button.button_group', props)}
`;

/** @component */
export default ButtonGroup;
