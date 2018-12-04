import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';

import Registration from './Registration';

export default function Routes (props) {
    return <>
        <Router>
            <Switch>
                <Route path='/' exact component={() => (
                    props.isLogged
                        ? <Home/>
                        : <Redirect to={'/registration'} />
                )}/>
                <Route path='/registration' component={Registration}/>
            </Switch>
        </Router>
    </>
}