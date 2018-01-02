import { PureComponent } from 'react';
import uuid from 'uuid/v1';

export default class FormContainer extends PureComponent {
    constructor(...args) {
        super(...args);

        this.inputId = uuid();
    }

    getLabelProps = () => {
        return {
            htmlFor: this.inputId
        };
    };

    getInputProps = () => {
        return {
            id: this.inputId
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
