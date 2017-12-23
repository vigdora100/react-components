```jsx
const ChatLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-chat.svg');
const ConnectLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-connect.svg');
const ExploreLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-explore.svg');
const GuideLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-guide.svg');
const MessageLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-message.svg');
const SupportLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-support.svg');
const TalkLogo = require('@zendesk/garden-svg-icons/src/26-relationshape-talk.svg');
const InlineSVG = require("inline-svg-react").default;

<Grid columns={2} stretched>
    <Nav expanded>
        <NavItem>
            <NavItemText>
                Default
            </NavItemText>
        </NavItem>
        <NavItem hovered>
            <NavItemText>
                Hovered
            </NavItemText>
        </NavItem>
        <NavItem active>
            <NavItemText>
                Active
            </NavItemText>
        </NavItem>
        <NavItem current>
            <NavItemText>
                Current
            </NavItemText>
        </NavItem>
        <NavItem focused>
            <NavItemText>
                Focused
            </NavItemText>
        </NavItem>
    </Nav>
    <Nav>
        <NavItem product="chat" logo>
            <NavItemIcon>
                <InlineSVG icon={ChatLogo} />
            </NavItemIcon>
        </NavItem>
        <NavItem product="connect" logo>
            <NavItemIcon>
                <InlineSVG icon={ConnectLogo} />
            </NavItemIcon>
        </NavItem>
        <NavItem product="explore" logo>
            <NavItemIcon>
                <InlineSVG icon={ExploreLogo} />
            </NavItemIcon>
        </NavItem>
        <NavItem product="guide" logo>
            <NavItemIcon>
                <InlineSVG icon={GuideLogo} />
            </NavItemIcon>
        </NavItem>
        <NavItem product="message" logo>
            <NavItemIcon>
                <InlineSVG icon={MessageLogo} />
            </NavItemIcon>
        </NavItem>
        <NavItem product="talk" logo>
            <NavItemIcon>
                <InlineSVG icon={TalkLogo} />
            </NavItemIcon>
        </NavItem>
    </Nav>
</Grid>
```
