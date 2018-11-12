import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import AllMovies from "./containers/AllMovies";
import Player from "./containers/Player";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFacebook,
  faInstagram,
  faGooglePlusSquare
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faFacebook,
  faInstagram,
  faGooglePlusSquare,
  faUser,
  faLock,
  faEnvelope
);

const App = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/dashboard/homepage" />}
      />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registration" component={RegisterPage} />
      <Route path="/allmovies" component={AllMovies} />
      <Route path="/player" component={Player} />
    </Switch>
  </div>
);

export default App;
