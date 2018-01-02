import styled from 'styled-components';
import Button from './Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { utils } from '@zendeskgarden/react-theming';

const BasicButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--basic']
})`
    ${props => utils.retrieveTheme('button.basic_button', props)}
`;

/** @component */
export default BasicButton;
