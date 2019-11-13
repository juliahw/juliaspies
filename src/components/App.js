import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Popup from "./Popup";
import PopupForm from "./PopupForm";

import Logo from "../images/logo.png";

const FACEBOOK_LINK = "https://www.facebook.com/juliamakespies";
const INSTAGRAM_LINK = "https://www.instagram.com/juliamakespies";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Popup} />
          <Route path="/order" component={PopupForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
