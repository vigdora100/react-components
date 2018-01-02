import styled from 'styled-components';
import VARIABLES from '@zendesk/garden-css-variables';
import { utils } from '@zendeskgarden/react-theming';

const Label = styled.label`
    color: ${VARIABLES.zdColorDarkGray};
    font-size: ${VARIABLES.zdFontSizeEpsilon};
    font-weight: ${VARIABLES.zdFontWeightSemibold};
    vertical-align: middle;

    direction: ${props => utils.isRtl(props) ? 'rtl' : 'ltr'};
    ${props => utils.retrieveTheme('form.label', props)}
`;

/** @component */
export default Label;
