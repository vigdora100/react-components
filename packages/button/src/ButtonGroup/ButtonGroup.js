import styled from 'styled-components';
import classNames from 'classnames';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme, isRtl } from 'garden-react-theming';

const ButtonGroup = styled.div.attrs({
  className: props => classNames(ButtonStyles['l-btn-group'], {
    [ButtonStyles['is-rtl']]: isRtl(props)
  })
})`
  :focus {
    outline: none;
  }

  ${props => retrieveTheme('button.button_group', props)}
`;

/** @component */
export default ButtonGroup;
