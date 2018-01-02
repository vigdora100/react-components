import { withTheme } from 'styled-components';

function retrieveTheme(componentId, props) {
    const styles = props.theme.styles;

    if (!styles) {
        return;
    }

    const componentStyles = styles[componentId];
    if (typeof componentStyles === 'function') {
        return componentStyles(props);
    }

    return componentStyles;
}

function isRtl(props) {
    return props.theme && props.theme.rtl;
}

export default {
    isRtl,
    withTheme,
    retrieveTheme
};
