import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import LabelStyles from '@zendesk/garden-css-labels';
import { retrieveTheme } from 'garden-react-theming';

const Tag = styled.div.attrs({
  className: props => classNames(LabelStyles['c-label'], {
    // Colors
    [LabelStyles['c-label--light']]: props.color === 'light',
    [LabelStyles['c-label--dark']]: props.color === 'dark',
    [LabelStyles['c-label--error']]: props.color === 'error',
    [LabelStyles['c-label--warning']]: props.color === 'warning',
    [LabelStyles['c-label--success']]: props.color === 'success',

    // Sizes
    [LabelStyles['c-label--sm']]: props.size === 'small',
    [LabelStyles['c-label--lg']]: props.size === 'large',

    // States
    [LabelStyles['is-focused']]: props.focused
  })
})`
  ${props => retrieveTheme('tag', props)}
`;

Tag.propTypes = {
  color: PropTypes.oneOf(['light', 'dark', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'large']),
  focused: PropTypes.bool
};

/** @component */
export default Tag;
