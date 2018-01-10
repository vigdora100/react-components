import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';

const BareInput = styled.input`
  border: none;
  outline: none;

  width: 100%;

  ${props => retrieveTheme('forms.bare_input', props)}
`;

/** @component */
export default BareInput;
