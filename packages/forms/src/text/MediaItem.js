import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';

const MediaItem = styled.div`
  ${props => retrieveTheme('forms.media_item', props)}
`;

/** @component */
export default MediaItem;
