import styled from 'styled-components';
import Button from '../Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from 'garden-react-theming';

const BasicButton = styled(Button).attrs({
  className: ButtonStyles['c-btn--basic']
})`
  ${props => retrieveTheme('button.basic_button', props)}
`;

/** @component */
export default BasicButton;
