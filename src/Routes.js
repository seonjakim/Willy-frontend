import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";

import Main from "./Pages/Main/Main";
import SignIn from "./Pages/SignIn/SignIn"

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/signin" component={SignIn} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;