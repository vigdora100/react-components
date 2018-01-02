import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VARIABLES from '@zendesk/garden-css-variables';
import { utils } from '@zendeskgarden/react-theming';

import IconMessage from './IconMessage';
import ErrorIcon from '@zendesk/garden-svg-icons/src/14-error-fill.svg';

const StyledErrorMessage = styled(IconMessage)`
    color: ${VARIABLES.zdColorFlamingo};

    ${props => utils.retrieveTheme('form.error_message', props)}
`;

const ErrorMessage = ({ children, ...other }) => (
    <StyledErrorMessage icon={<ErrorIcon />} {...other}>
        {children}
    </StyledErrorMessage>
);

ErrorMessage.propTypes = {
    children: PropTypes.node
};

export default ErrorMessage;
