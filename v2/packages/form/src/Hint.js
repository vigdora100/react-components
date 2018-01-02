import styled from 'styled-components';
import VARIABLES from '@zendesk/garden-css-variables';
import { utils } from '@zendeskgarden/react-theming';

const Hint = styled.div`
    color: ${VARIABLES.zdColorAluminum};
    font-size: ${VARIABLES.zdFontSizeEpsilon};
    line-height: ${(20 / 14)}

    ${props => utils.retrieveTheme('form.hint', props)}
`;

/** @component */
export default Hint;
