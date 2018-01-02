import styled from 'styled-components';
import { utils } from '@zendeskgarden/react-theming';

const FormGroup = styled.div`
    direction: ${props => utils.isRtl(props) ? 'rtl' : 'ltr'};
    ${props => utils.retrieveTheme('form', props)}
`;

/** @component */
export default FormGroup;
