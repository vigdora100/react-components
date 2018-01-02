import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import StyleGuideRenderer from 'react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer';

export default class StyleGuide extends PureComponent {
    static childContextTypes = {
        isRtl: PropTypes.bool,
        setRtl: PropTypes.func
    };

    constructor(...args) {
        super(...args);

        this.state = {
            isRtl: false
        };
    }
    getChildContext = () => {
        return {
            isRtl: this.state.isRtl,
            setRtl: isRtl => this.setState({ isRtl })
        };
    };

    componentDidMount = () => {
        document.body.setAttribute('data-is-rtl', this.state.isRtl);
    };

    componentDidUpdate = () => {
        document.body.setAttribute('data-is-rtl', this.state.isRtl);
    };

    render() {
        const { children, ...other } = this.props;
        const { isRtl } = this.state;

        return (
            <StyleGuideRenderer {...other}>
                {children}
            </StyleGuideRenderer>
        );
    }
};
