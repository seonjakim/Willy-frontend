import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";

import Main from "./Pages/Main/Main";
// import SignIn from "./Pages/SignIn/SignIn";
// import SignUp from "./Pages/SignUp/SignUp";
import Survey from "./Pages/Survey/Survey";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={Main} />
                    {/* <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} /> */}
                    <Route path="/survey" component={Survey} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;