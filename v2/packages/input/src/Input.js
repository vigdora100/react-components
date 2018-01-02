import styled from 'styled-components';
import classNames from 'classnames';
import FormStyles from '@zendesk/garden-css-forms';
import { utils } from '@zendeskgarden/react-theming';

const Input = styled.input.attrs({
  className: props => classNames(FormStyles['c-txt__input'])
})`
  :hover {
    box-shadow: 3px 3px 3px 3px blue;
  }

  :focus {
    box-shadow: 3px 3px 3px 3px red;
  }

  ${props => utils.retrieveTheme('input', props)}
`;

/** @component */
export default Input;
