import styled from 'styled-components';
import Button from '../Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from 'garden-react-theming';

const AnchorButton = styled(Button).attrs({
  className: ButtonStyles['c-btn--anchor']
})`
  ${props => retrieveTheme('button.anchor_button', props)}
`;

/** @component */
export default AnchorButton;
