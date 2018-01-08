import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * @component
 *
 * Higher-order-component for interaction within the `selectionContainer` HOC.
 *
 * Provides accessibility attributes related to selection.
 **/
export default function selectable(WrappedComponent) {
  class selectable extends PureComponent {
    static propTypes = {
      role: PropTypes.string,
      focused: PropTypes.bool,
      selected: PropTypes.bool,
      disabled: PropTypes.bool
    };

    static defaultProps = {
      role: 'option',
      disabled: false,
      selected: false
    };

    static isSelectable = true;

    render() {
      const { role, selected, disabled, ...other } = this.props;

      return(
        <WrappedComponent
          role={role}
          aria-disabled={disabled}
          aria-selected={selected}
          selected={selected}
          {...other} />
      );
    };
  };

  selectable.displayName = `selectable(${WrappedComponent.displayName || WrappedComponent.name})`;
  return selectable;
};

