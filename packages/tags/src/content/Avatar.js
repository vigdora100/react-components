import styled from 'styled-components';
import LabelStyles from '@zendesk/garden-css-labels';
import { retrieveTheme } from 'garden-react-theming';

const Avatar = styled.div.attrs({
  className: LabelStyles['c-label__avatar']
})`
  img,
  svg {
    width: 100%;
    height: 100%;
  }

  ${props => retrieveTheme('tag.avatar', props)}
`;

/**
 * @component
 **/
export default Avatar;
