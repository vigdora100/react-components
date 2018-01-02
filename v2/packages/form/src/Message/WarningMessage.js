import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VARIABLES from '@zendesk/garden-css-variables';
import { utils } from '@zendeskgarden/react-theming';

import IconMessage from './IconMessage';
import WarningIcon from '@zendesk/garden-svg-icons/src/14-error-fill.svg';

const StyledWarningMessage = styled(IconMessage)`
    color: ${VARIABLES.zdColorMarigold};

    ${props => utils.retrieveTheme('form.warning_message', props)}
`;

const WarningMessage = ({ children, ...other }) => (
    <StyledWarningMessage icon={<WarningIcon />} {...other}>
        {children}
    </StyledWarningMessage>
);

WarningMessage.propTypes = {
    children: PropTypes.node
};

export default WarningMessage;
