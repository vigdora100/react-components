import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';

const Label = styled.label`
  ${props => retrieveTheme('forms.label', props)}
`;

/** @component */
export default Label;
