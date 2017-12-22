```jsx
const ConnectLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-connect.svg');
const HomeFill = require('@zendesk/garden-svg-icons/src/26-home-fill.svg');
const CustomerListsFill = require('@zendesk/garden-svg-icons/src/26-customer-lists-fill.svg');
const EmailFill = require('@zendesk/garden-svg-icons/src/26-email-fill.svg');
const SettingsFill = require('@zendesk/garden-svg-icons/src/26-settings-fill.svg');
const CallIn = require('@zendesk/garden-svg-icons/src/14-call-in.svg');
const Search = require('@zendesk/garden-svg-icons/src/14-search.svg');
const InlineSVG = require("inline-svg-react").default;

<Chrome>
    <Nav expanded>
        <NavItem logo product="chat">
            <NavItemIcon>
                <InlineSVG icon={ConnectLogo} />
            </NavItemIcon>
            <NavItemText>Connect</NavItemText>
        </NavItem>
        <NavItem current>
            <NavItemIcon>
                <InlineSVG icon={HomeFill} />
            </NavItemIcon>
            <NavItemText>Home</NavItemText>
        </NavItem>
        <NavItem>
            <NavItemIcon>
                <InlineSVG icon={CustomerListsFill} />
            </NavItemIcon>
            <NavItemText>Segments</NavItemText>
        </NavItem>
        <NavItem>
            <NavItemIcon>
                <InlineSVG icon={EmailFill} />
            </NavItemIcon>
            <NavItemText>Campaigns</NavItemText>
        </NavItem>
        <NavItem>
            <NavItemIcon>
                <InlineSVG icon={SettingsFill} />
            </NavItemIcon>
            <NavItemText>Settings</NavItemText>
        </NavItem>
    </Nav>
    <SubNav>
        <SubNavItem>
            <SubNavItemText>SubNav 1</SubNavItemText>
        </SubNavItem>
        <SubNavItem>
            <SubNavItemText>SubNav 2</SubNavItemText>
        </SubNavItem>
        <SubNavItem>
            <SubNavItemText>SubNav 3</SubNavItemText>
        </SubNavItem>
    </SubNav>
    <Body>
        <Header>
            <HeaderItem>
                <HeaderItemIcon>
                    <InlineSVG icon={CallIn} />
                </HeaderItemIcon>
                <HeaderItemText clipped>Call-In</HeaderItemText>
            </HeaderItem>
            <HeaderItem>
                <HeaderItemIcon>
                    <InlineSVG icon={Search} />
                </HeaderItemIcon>
                <HeaderItemText clipped>Search</HeaderItemText>
            </HeaderItem>
        </Header>
        <Content>
            <Sidebar>
                Sidebar Content
            </Sidebar>
            <Main>
                Main content
            </Main>
        </Content>
    </Body>
</Chrome>
```
