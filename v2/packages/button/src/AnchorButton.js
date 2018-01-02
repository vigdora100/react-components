import styled from 'styled-components';
import Button from './Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { utils } from '@zendeskgarden/react-theming';

const AnchorButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--anchor']
})`
    ${props => utils.retrieveTheme('button.anchor_button', props)}
`;

/** @component */
export default AnchorButton;
