import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { utils } from '@zendeskgarden/react-theming';

import Message from './index';

const StyledIconMessage = styled(Message)`
  padding-left: 20px;
  position: relative;

  ${props => utils.retrieveTheme('form.icon_message', props)}
`;

const StyledIcon = styled.div`
  position: absolute;
  left: 0;
`;

const IconMessage = ({ children, icon, ...other }) => (
  <StyledIconMessage {...other}>
    <StyledIcon>
      {icon}
    </StyledIcon>
    {children}
  </StyledIconMessage>
);

IconMessage.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node
};

export default IconMessage;
