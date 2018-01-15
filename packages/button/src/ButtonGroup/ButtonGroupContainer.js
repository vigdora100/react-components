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
  <SelectionContainer {...other}>
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
  /**
   * Render-prop
   * @returns {Function} `({ getButtonGroupProps, getButtonProps, focusedIndex, selectedItem }) => {}`
   */
  children: PropTypes.func,
  defaultFocusedIndex: PropTypes.number,
  focusedIndex: PropTypes.number,
  selectedItem: PropTypes.any,
  /** Callback for all state objects. Used when in 'controlled' mode. */
  onStateChange: PropTypes.func,
  /** The root ID to use for descendants. A unique ID is created if none is provided. */
  id: PropTypes.string
};

/** @component */
export default ButtonGroupContainer;
