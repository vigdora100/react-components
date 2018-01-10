import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';
import Tag from '../Tag';

const SelectableTag = styled(Tag).attrs({
  tabIndex: '0'
})`
  ${props => retrieveTheme('tag.selectable_tag', props)}
`;

/** @component */
export default SelectableTag;
