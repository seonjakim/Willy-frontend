import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";

import MainPage from "./Pages/Main/MainPage";
import Survey from "./Pages/Survey/Survey";
//import SignIn from "./Pages/SignIn/SignIn";
//import SignUp from "./Pages/SignUp/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/survey" component={Survey} />
          {/* <Route exact path="/signin" component={SignIn} /> */}
          {/* <Route exact path="/signup" component={SignUp} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
