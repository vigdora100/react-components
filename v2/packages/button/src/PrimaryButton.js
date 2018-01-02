import styled from 'styled-components';
import Button from './Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { utils } from '@zendeskgarden/react-theming';

const PrimaryButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--primary']
})`
    ${props => utils.retrieveTheme('button.primary_button', props)}
`;

/** @component */
export default PrimaryButton;
