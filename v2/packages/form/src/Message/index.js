import styled from 'styled-components';
import VARIABLES from '@zendesk/garden-css-variables';
import { utils } from '@zendeskgarden/react-theming';

const Message = styled.div`
    color: ${VARIABLES.zdColorMonsoon};
    font-size: ${VARIABLES.zdFontSizeZeta};
    margin-top: 8px;

    ${props => utils.retrieveTheme('form.message', props)}
`;

/** @component */
export default Message;
