import styled from 'styled-components';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { utils } from '@zendeskgarden/react-theming';

const Icon = styled.img.attrs({
  className: ButtonStyles['c-btn__icon']
})`
  ${props => utils.retrieveTheme('button.icon', props)}
`;

/** @component */
export default Icon;
