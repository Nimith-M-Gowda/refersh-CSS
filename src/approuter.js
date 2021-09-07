import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./flexbox/mock5";
import AboutPage from "./flexbox/about-me";
import RecentPostPage from "./flexbox/recent-post";

export const Routes = {
  homepage: "/",
  aboutpage: "/about",
  recentpage: "/recent",
};
function Approuter(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={Routes.homepage} render={() => <HomePage />} />
          <Route exact path={Routes.aboutpage} render={() => <AboutPage />} />
          <Route
            exact
            path={Routes.recentpage}
            render={() => <RecentPostPage />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Approuter;
