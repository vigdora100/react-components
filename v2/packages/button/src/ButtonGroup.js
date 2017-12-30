import styled from 'styled-components';
import ButtonStyles from '@zendesk/garden-css-buttons';

const ButtonGroup = styled.div.attrs({
  className: ButtonStyles['l-btn-group']
})`
  :focus {
    outline: none;
  }
`;

/** @component */
export default ButtonGroup;
