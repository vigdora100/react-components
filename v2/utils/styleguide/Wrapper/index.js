import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '../../../packages/theming/src/ThemeProvider';

const Wrapper = ({ children }, { isRtl }) => {
    return <ThemeProvider rtl={isRtl}>
        {children}
    </ThemeProvider>;
};

Wrapper.propTypes = {
    children: PropTypes.any
};

Wrapper.contextTypes = {
    isRtl: PropTypes.bool
};

export default Wrapper;
