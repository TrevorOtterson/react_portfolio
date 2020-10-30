import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Portfolio from './portfolio';


const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/aboutMe' component={AboutMe} />
        <Route path='/portfolio' component={Portfolio} />
    </Switch>
)

export default Main;