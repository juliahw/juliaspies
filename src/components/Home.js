import React from "react";
import { Link } from "react-router-dom";

import menuItems from "../menuItems";
import MenuItem from "./MenuItem";
import Follow from "./Follow";

const Home = () => (
  <div>
    <div className="row">
      <div className="span8">
        <h1>Julia’s Pies</h1>
        <p>
          Announcing <b>Free Pie Sunday</b>: the weekly event where I bake pies
          with seasonal fruits from some of my favorite local farms, and you
          pick up a slice for free.
        </p>
        <p>
          This week’s pie is <b>Apricot Custard Pie</b>: oat crumble crust and a
          tangy filling reminiscent of cheesecake, dappled with ripe apricots.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="span12 text-center">
        <Link to="/order">
          <div className="btn space2">
            <h3 className="text-white">Reserve Now</h3>
          </div>
        </Link>
      </div>
    </div>

    <Follow />
  </div>
);

export default Home;
