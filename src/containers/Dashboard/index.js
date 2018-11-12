import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AllMovies from "../AllMovies";
import IconLinks from "../../components/IconLinks";
import HomePage from "../HomePage";
import MovieDetailsPage from "../../containers/MovieDetailsPage";
import {Switch, Route} from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/dashboard/homepage" component={HomePage}/>
            <Route path="/dashboard/movies" component={AllMovies} />
            <Route path="/dashboard/moviedetails" component={MovieDetailsPage} />
          </Switch>
          <IconLinks />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
