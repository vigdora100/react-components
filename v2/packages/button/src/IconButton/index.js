import styled from 'styled-components';
import Button from '../Button';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { utils } from '@zendeskgarden/react-theming';

const IconButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--icon']
})`
    ${props => utils.retrieveTheme('button.icon_button', props)}
`;

/** @component */
export default IconButton;
