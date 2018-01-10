import PropTypes from 'prop-types';
import { retrieveTheme } from 'garden-react-theming';

import Input from './Input';

const InputBlock = Input.withComponent('div').extend`
  border: grey solid;

  ${props => retrieveTheme('forms.input_block', props)}
`;

InputBlock.propTypes = {
  /** Whether to style MediaItem's within the container */
  media: PropTypes.bool
};

/** @component */
export default InputBlock;
