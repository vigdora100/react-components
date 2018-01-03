import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

export default class FormContainer extends PureComponent {
    static propTypes = {
      /** Receives: { getLabelProps, getInputProps } as a parameter */
      children: PropTypes.func
    };

    constructor(...args) {
      super(...args);

      this.inputId = uuid();
    }

    getLabelProps = (...other) => {
      return {
        htmlFor: this.inputId,
        ...other
      };
    };

    getInputProps = (...other) => {
      return {
        id: this.inputId,
        ...other
      };
    };

    render() {
      const { children } = this.props;

      return children({
        getLabelProps: this.getLabelProps,
        getInputProps: this.getInputProps
      });
    }
}
