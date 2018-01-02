import styled from 'styled-components';
import { Input } from '@zendeskgarden/react-input';
import { utils } from '@zendeskgarden/react-theming';

import Hint from './Hint';
import Message from './Message';

const FormGroup = styled.div`
    direction: ${props => utils.isRtl(props) ? 'rtl' : 'ltr'};

    ${Hint} {
        margin-top: -4px;
    }

    ${Input} {
        margin-top: 8px;
    }

    ${Message} {
        margin-top: 4px;
    }

    ${props => utils.retrieveTheme('form', props)}
`;

/** @component */
export default FormGroup;
