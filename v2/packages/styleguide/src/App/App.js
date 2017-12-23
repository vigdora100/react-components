import React, { Component } from 'react';
import { Chrome, Body, Content } from '@zendeskgarden/react-chrome';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import SubNavigation from '../Navigation/SubNavigation';
import IframePage from '../pages/IframePage';
import HomePage from '../pages/Home';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Chrome>
                    <Navigation />
                    <SubNavigation />
                    <Body>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/chrome" component={IframePage}/>
                        <Route path="/selection" component={IframePage}/>
                    </Body>
                </Chrome>
            </Router>
        );
    }
};
