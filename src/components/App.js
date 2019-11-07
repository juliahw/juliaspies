import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Form from "./Form";

import Logo from "../images/logo.png";

const FACEBOOK_LINK = "https://www.facebook.com/juliamakespies";
const INSTAGRAM_LINK = "https://www.instagram.com/juliamakespies";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="span12">
            <Link to="/">
              <img id="logo" src={Logo} alt="Julia's Pies" />
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;
