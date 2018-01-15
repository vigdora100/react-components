import PropTypes from 'prop-types';
import { idManagement, ControlledComponent } from 'garden-react-selection';

export default class FormContainer extends ControlledComponent {
    static propTypes = {
      /** Receives: { getLabelProps, getInputProps } as a parameter */
      children: PropTypes.func,
      id: PropTypes.string
    };

    constructor(...args) {
      super(...args);

      this.state = {
        id: idManagement.generateId()
      };
    }

    _getInputId = () => `${this.getControlledState().id}--input`;

    _getLabelId = () => `${this.getControlledState().id}--label`;

    _getValidationId = () => `${this.getControlledState().id}--validation`;

    _getLabelProps = ({ id, htmlFor, ...other } = {}) => {
      return {
        id: id || this._getLabelId(),
        htmlFor: htmlFor || this._getInputId(),
        ...other
      };
    };

    _getInputProps = ({ id, ...other } = {}) => {
      return {
        id: id || this._getInputId(),
        'aria-labelledby': this._getLabelId(),
        'aria-describedby': this._getValidationId(),
        ...other
      };
    };

    _getMessageProps = ({ id, ...other } = {}) => {
      return {
        id: id || this._getValidationId(),
        ...other
      };
    };

    render() {
      const { children } = this.props;

      return children({
        getLabelProps: this._getLabelProps,
        getInputProps: this._getInputProps,
        getMessageProps: this._getMessageProps,
      });
    }
}
