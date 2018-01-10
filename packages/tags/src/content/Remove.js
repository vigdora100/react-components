import styled from 'styled-components';
import LabelStyles from '@zendesk/garden-css-labels';
import { retrieveTheme } from 'garden-react-theming';

const Remove = styled.button.attrs({
  className: LabelStyles['c-label__remove']
})`
  ${props => retrieveTheme('tag.remove', props)}
`;

/** @component **/
export default Remove;
