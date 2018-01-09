import React from 'react';
import PropTypes from 'prop-types';
import { SelectionContainer } from 'garden-react-selection';

const getButtonProps = ({ role, tabIndex, ...other }= {}) => {
  return {
    role: role || 'radio',
    tabIndex: tabIndex || -1,
    ...other
  };
};

const getButtonGroupProps = ({ role, tabIndex, ...other } = {}) => {
  return {
    role: role || 'radiogroup',
    tabIndex: tabIndex || 0,
    ...other
  };
};

const ButtonGroupContainer = ({ children, ...other }) => (
  <SelectionContainer
    {...other}>
    {({ getContainerProps, getItemProps, ...otherSelectionProps }) => (
      children({
        getButtonGroupProps: props => getContainerProps(getButtonGroupProps(props)),
        getButtonProps: props => getItemProps(getButtonProps(props)),
        ...otherSelectionProps
      })
    )}
  </SelectionContainer>
);

ButtonGroupContainer.propTypes = {
  children: PropTypes.func
};

/** @component */
export default ButtonGroupContainer;
