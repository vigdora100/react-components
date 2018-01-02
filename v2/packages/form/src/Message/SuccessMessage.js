import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VARIABLES from '@zendesk/garden-css-variables';
import { utils } from '@zendeskgarden/react-theming';

import IconMessage from './IconMessage';
import SuccessIcon from '@zendesk/garden-svg-icons/src/14-checkmark-fill.svg';

const StyledSuccessMessage = styled(IconMessage)`
    color: ${VARIABLES.zdColorChateauGreen};

    ${props => utils.retrieveTheme('form.success_message', props)}
`;

const SuccessMessage = ({ children, ...other }) => (
    <StyledSuccessMessage icon={<SuccessIcon />} {...other}>
        {children}
    </StyledSuccessMessage>
);

SuccessMessage.propTypes = {
    children: PropTypes.node
};

export default SuccessMessage;
