import styled from 'styled-components';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from 'garden-react-theming';

const Icon = styled.img.attrs({
  className: ButtonStyles['c-btn__icon']
})`
  ${props => retrieveTheme('button.icon', props)}
`;

/** @component */
export default Icon;
