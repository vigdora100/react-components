import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';

const Hint = styled.div`
  ${props => retrieveTheme('forms.hint', props)}
`;

/** @component */
export default Hint;
