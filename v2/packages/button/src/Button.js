import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';

const StyledButton = styled.button.attrs({
  className: props => classNames(ButtonStyles['c-btn'], {
    // Danger styling
    [ButtonStyles['c-btn--danger']]: props.danger,

    // Sizes
    [ButtonStyles['c-btn--medium']]: props.size === 'medium',
    [ButtonStyles['c-btn--large']]: props.size === 'large',
    [ButtonStyles['c-btn--full']]: props.stretched,

    // States
    [ButtonStyles['is-disabled']]: props.disabled,
    [ButtonStyles['is-focused']]: props.focused,
    [ButtonStyles['is-hovered']]: props.hovered,
    [ButtonStyles['is-active']]: props.active,
    [ButtonStyles['is-selected']]: props.selected
  })
})``;

const Button = ({ focused, children, ...other}) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
        <StyledButton
          {...getFocusProps(other)}
          focused={focused || keyboardFocused}>
          {children}
        </StyledButton>
    )}
  </KeyboardFocusContainer>
);

Button.propTypes = {
  danger: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
  stretched: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  selected: PropTypes.bool,
  children: PropTypes.node
};

/** @component */
export default Button;
