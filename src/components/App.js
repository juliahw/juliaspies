import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";

import Logo from "../images/logo.png";

const FACEBOOK_LINK = "https://www.facebook.com/juliamakespies";
const INSTAGRAM_LINK = "https://www.instagram.com/juliamakespies";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
