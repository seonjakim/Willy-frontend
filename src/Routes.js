import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";
import Main from "./Pages/Main/Main";
import Survey from "./Pages/Survey/Survey";
import Result from "./Pages/Survey/Result/Result";
import ProductView from "./Pages/ProductView/ProductView";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/survey" component={Survey} />
          <Route path="/result" component={Result} />
          <Route path="/product" component={ProductView} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
