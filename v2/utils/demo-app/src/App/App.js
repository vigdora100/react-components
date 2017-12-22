import React, { Component } from 'react';
import Chrome from '@zendeskgarden/react-chrome/dist/Chrome';
import Nav from '@zendeskgarden/react-chrome/dist/Nav';
import NavItem from '@zendeskgarden/react-chrome/dist/NavItem';
import NavItemIcon from '@zendeskgarden/react-chrome/dist/NavItemIcon';
import NavItemText from '@zendeskgarden/react-chrome/dist/NavItemText';
import SubNav from '@zendeskgarden/react-chrome/dist/SubNav';
import SubNavItem from '@zendeskgarden/react-chrome/dist/SubNavItem';
import SubNavItemText from '@zendeskgarden/react-chrome/dist/SubNavItemText';
import Body from '@zendeskgarden/react-chrome/dist/Body';
import Header from '@zendeskgarden/react-chrome/dist/Header';
import Content from '@zendeskgarden/react-chrome/dist/Content';
import InlineSVG from 'inline-svg-react';

import ZendeskIcon from '@zendesk/garden-svg-icons/src/26-zendesk.svg';
import HomeIcon from '@zendesk/garden-svg-icons/src/26-home-fill.svg';
import KnowledgeBaseIcon from '@zendesk/garden-svg-icons/src/26-knowledge-base.svg';
import DashboardIcon from '@zendesk/garden-svg-icons/src/26-dashboard.svg';
import AppIcon from '@zendesk/garden-svg-icons/src/26-app.svg';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <Chrome>
                <Nav>
                    <NavItem logo>
                        <NavItemIcon title='Zendesk Garden'>
                            <InlineSVG icon={ZendeskIcon} />
                        </NavItemIcon>
                        <NavItemText>Zendesk Garden</NavItemText>
                    </NavItem>
                    <NavItem>
                        <NavItemIcon title='Home'>
                            <InlineSVG icon={HomeIcon} />
                        </NavItemIcon>
                        <NavItemText>Home</NavItemText>
                    </NavItem>
                    <NavItem>
                        <NavItemIcon title='Assets'>
                            <InlineSVG icon={KnowledgeBaseIcon} />
                        </NavItemIcon>
                        <NavItemText>Assets</NavItemText>
                    </NavItem>
                    <NavItem>
                        <NavItemIcon title='Bedrock'>
                            <InlineSVG icon={DashboardIcon} />
                        </NavItemIcon>
                        <NavItemText>Bedrock</NavItemText>
                    </NavItem>
                    <NavItem current>
                        <NavItemIcon title='React'>
                            <InlineSVG icon={AppIcon} />
                        </NavItemIcon>
                        <NavItemText>React</NavItemText>
                    </NavItem>
                </Nav>
                <SubNav>
                    <SubNavItem current>
                        <SubNavItemText>Chrome</SubNavItemText>
                    </SubNavItem>
                </SubNav>
                <Body>
                    <Header>&nbsp;</Header>
                    <Content className="content">
                        <iframe className="iframe-content" src="http://127.0.0.1:8080" />
                    </Content>
                </Body>
            </Chrome>
        );
    }
};
