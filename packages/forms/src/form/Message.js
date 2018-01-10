import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from 'garden-react-theming';

const Message = styled.div`
  color: ${({ validation }) => validation === 'success' ? 'green' : validation === 'error' ? 'red' : validation === 'warning' ? 'yellow' : 'inherit'};

  ${props => retrieveTheme('forms.message', props)}
`;

Message.propTypes = {
  validation: PropTypes.oneOf(['success', 'error', 'warning'])
};

/** @component */
export default Message;
