import styled from 'styled-components';
import Button from '../Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from 'garden-react-theming';

const PillButton = styled(Button).attrs({
  className: ButtonStyles['c-btn--pill']
})`
  ${props => retrieveTheme('button.pill_button', props)}
`;

/** @component */
export default PillButton;
