
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, NavItem, NavItemIcon, NavItemText } from '@zendeskgarden/react-chrome';
import InlineSVG from 'inline-svg-react';

import ZendeskIcon from '@zendesk/garden-svg-icons/src/26-zendesk.svg';
import HomeIcon from '@zendesk/garden-svg-icons/src/26-home-fill.svg';
import KnowledgeBaseIcon from '@zendesk/garden-svg-icons/src/26-knowledge-base.svg';
import DashboardIcon from '@zendesk/garden-svg-icons/src/26-dashboard.svg';
import AppIcon from '@zendesk/garden-svg-icons/src/26-app.svg';


const Navigation = ({ history }) => (
    <Nav>
        <NavItem logo>
            <NavItemIcon title='Zendesk Garden'>
                <InlineSVG icon={ZendeskIcon} />
            </NavItemIcon>
            <NavItemText>Zendesk Garden</NavItemText>
        </NavItem>
        <NavItem onClick={() => (window.location.href = 'http://garden.zendesk.com/')}>
            <NavItemIcon title='Home'>
                <InlineSVG icon={HomeIcon} />
            </NavItemIcon>
            <NavItemText>Home</NavItemText>
        </NavItem>
        <NavItem onClick={() => (window.location.href = 'http://garden.zendesk.com/assets/')}>
            <NavItemIcon title='Assets'>
                <InlineSVG icon={KnowledgeBaseIcon} />
            </NavItemIcon>
            <NavItemText>Assets</NavItemText>
        </NavItem>
        <NavItem onClick={() => (window.location.href = 'http://garden.zendesk.com/css-bedrock')}>
            <NavItemIcon title='Bedrock'>
                <InlineSVG icon={DashboardIcon} />
            </NavItemIcon>
            <NavItemText>Bedrock</NavItemText>
        </NavItem>
        <NavItem current onClick={() => history.push('/')}>
            <NavItemIcon title='React'>
                <InlineSVG icon={AppIcon} />
            </NavItemIcon>
            <NavItemText>React</NavItemText>
        </NavItem>
    </Nav>
);

export default withRouter(Navigation);
