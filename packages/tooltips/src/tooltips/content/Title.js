import styled from 'styled-components';
import { zdFontWeightRegular } from '@zendesk/garden-css-variables';
import { retrieveTheme } from 'garden-react-theming';

const Title = styled.div`
  font-weight: ${zdFontWeightRegular};
  margin-bottom: 10px;

  ${props => retrieveTheme('tooltip.title', props)}
`;

export default Title;
