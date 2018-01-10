import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';

const TextArea = styled.textarea`
  width: 100%;

  ${props => retrieveTheme('forms.text_area', props)}
`;

/** @component */
export default TextArea;
