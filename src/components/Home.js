import React from "react";
import { Link } from "react-router-dom";

import menuItems from "../menuItems";
import Follow from "./Follow";

const Home = () => (
  <div>
    <div className="row">
      <div className="span8">
        <h1>Julia’s Pies</h1>
        <p>Something’s cooking here… Stayed tuned!</p>
      </div>
    </div>

    <Follow />
  </div>
);

export default Home;
