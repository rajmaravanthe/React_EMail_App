import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import login from '../login/index';
import home from '../home/index';


class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={login} />
                <Route path="/home" component={home} />
            </Switch>
        );
    }
}

export default Routes;
