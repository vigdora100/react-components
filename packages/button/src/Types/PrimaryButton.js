import styled from 'styled-components';
import Button from '../Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from 'garden-react-theming';

const PrimaryButton = styled(Button).attrs({
  className: ButtonStyles['c-btn--primary']
})`
  ${props => retrieveTheme('button.primary_button', props)}
`;

/** @component */
export default PrimaryButton;
