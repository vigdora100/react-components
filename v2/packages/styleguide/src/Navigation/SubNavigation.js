
import React from 'react';
import { withRouter } from 'react-router-dom';
import { SubNav, SubNavItem, SubNavItemText } from '@zendeskgarden/react-chrome';

const SubNavigation = ({ history }) => {
    return (
        <SubNav>
            <SubNavItem
                current={history.location.pathname === '/chrome'}
                onClick={() => history.push('/chrome')}>
                <SubNavItemText>Chrome</SubNavItemText>
            </SubNavItem>
            <SubNavItem
                current={history.location.pathname === '/selection'}
                onClick={() => history.push('/selection')}>
                <SubNavItemText>Selection</SubNavItemText>
            </SubNavItem>
        </SubNav>
    );
};

export default withRouter(SubNavigation);



