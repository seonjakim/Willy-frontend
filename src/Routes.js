import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";

import MainPage from "./Pages/Main/MainPage";
import Survey from "./Pages/Survey/Survey";
import Result from "./Pages/Survey/Result/Result";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/survey" component={Survey} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
