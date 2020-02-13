import React, { Component } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch
} from "react-router-dom";
import Login from "./Login/Login";
import List from "./List/List";

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <NavLink exact to="/login">
              Zaloguj się
            </NavLink>
          </ul>
        </nav>
        <section>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={List} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
