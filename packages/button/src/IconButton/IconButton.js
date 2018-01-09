import styled from 'styled-components';
import Button from '../Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from 'garden-react-theming';

const IconButton = styled(Button).attrs({
  className: ButtonStyles['c-btn--icon']
})`
  ${props => retrieveTheme('button.icon_button', props)}
`;

/** @component */
export default IconButton;
