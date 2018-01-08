import React, { PureComponent } from 'react';

export default function selection(WrappedComponent) {
  class selection extends PureComponent {
    static isSelection = true;

    render() {
      const { role, selected, ...other } = this.props;

      return(
        <WrappedComponent
          role={role || 'option'}
          aria-selected={selected}
          selected={selected}
          {...other} />
      );
    };
  };

  selection.displayName = `selection(${WrappedComponent.displayName || WrappedComponent.name})`;
  return selection;
};

