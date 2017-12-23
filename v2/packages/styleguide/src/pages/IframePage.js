import React from 'react';
import { withRouter } from 'react-router-dom';
import { Content, Header, HeaderItem, HeaderItemIcon, HeaderItemText } from '@zendeskgarden/react-chrome';
import InlineSVG from 'inline-svg-react';

import SettingsIcon from '@zendesk/garden-svg-icons/src/14-settings.svg';

const IframePage = ({ history }) => (
    <div>
        <Header>
            <HeaderItem>
                <HeaderItemIcon>
                    <InlineSVG icon={SettingsIcon} />
                </HeaderItemIcon>
                <HeaderItemText clipped>Settings</HeaderItemText>
            </HeaderItem>
        </Header>
        <Content className="content">
            <iframe className="iframe-content" src={`iframes${history.location.pathname}`} />
        </Content>
    </div>
);

export default withRouter(IframePage);
