import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import HomePage from "./components/auth/HomePage";
import TestPage from "./components/auth/TestPage";
import A from "./components/auth/A";
import B from "./components/auth/B";
import C from "./components/auth/C";
import Footer from "./components/footer/footer";

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/TestPage" component={TestPage} />
        {/* <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Route path="/c" component={C} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default App;
