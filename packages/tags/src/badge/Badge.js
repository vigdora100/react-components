import styled from 'styled-components';
import Tag from '../Tag';
import LabelStyles from '@zendesk/garden-css-labels';
import { retrieveTheme } from 'garden-react-theming';

const Badge = styled(Tag).attrs({
  className: LabelStyles['c-label--pill']
})`
  ${props => retrieveTheme('tag.pill', props)}
`;

/** @component */
export default Badge;
