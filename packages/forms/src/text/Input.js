import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';

const Input = styled.input`
  width: 100%;

  ${props => retrieveTheme('forms.input', props)}
`;

/** @component */
export default Input;
