import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

export default class FormContainer extends PureComponent {
    static propTypes = {
      /** Receives: { getLabelProps, getInputProps } as a parameter */
      children: PropTypes.func,
      id: PropTypes.string
    };

    static defaultProps = {
      id: `garden-${uuid()}`
    };

    getInputId = () => `${this.props.id}--input`;

    getValidationId = () => `${this.props.id}--validation`;

    getLabelProps = props => {
      return {
        htmlFor: this.getInputId(),
        ...props
      };
    };

    getInputProps = props => {
      return {
        id: this.getInputId(),
        'aria-describedby': this.getValidationId(),
        ...props
      };
    };

    getValidationProps = props => {
      return {
        id: this.getValidationId(),
        ...props
      };
    };

    render() {
      const { children } = this.props;

      return children({
        getLabelProps: this.getLabelProps,
        getInputProps: this.getInputProps,
        getValidationProps: this.getValidationProps,
      });
    }
}
